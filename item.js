// Initialize a new TaskManager with currentId set to 0
const itemsController = new ItemsController(0);


function addItemCard(item){
    const itemHTML = '<div class="card" style="width: 20rem;">\n' +
        '    <img src="'+item.img1 +'" width="300" height="250"  alt="product image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.pname+'</h5>\n' +
        '        <p class="card-text">'+item.price+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add item</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

function loadStorageSampleData(){
    if(!localStorage.getItem("items")){
        const sampleItems = [{'pname':'Lehenga DR55',
        'img1':'Resources\Images\2b43dcef64bf2afdaecb5ef248fae515.jpg',
        'price':'90000'},
        {'pname':'Lehenga VY58',
        'img1':'https://s3-eu-west-2.amazonaws.com/omsaraimages/wp-content/uploads/20191111222828/59575.jpg',
        'price':'58000'}];
        console.log(sampleItems);
        localStorage.setItem("items", JSON.stringify(sampleItems));
    }
}

function loadCardsListFromItemsController(){
    for(var i = 0, size = itemsController.items.length; i < size ; i++){
        const item = itemsController.items[i];
        addItemCard(item);
    }
}

loadStorageSampleData();
itemsController.loadItemsFromLocalStorage();
loadCardsListFromItemsController();