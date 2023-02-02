const getButtoncalled=document.getElementById("get");
getButtoncalled.addEventListener('click', get)

async function get(){
    const response = await fetch('http://localhost:8080/getallitems');
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if(response){
        hideloader();
    }
    show(data);
}

    
get();
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}

  

   


function show(data) {
    let tab = 
        `<tr>
          <th>Name</th>
          
          <th>ImageUrl</th>
          <th>Price</th>
          <th>Description</th>
          
         </tr>`;
    
    // Loop to access all rows 
    for (let r of data) {
        tab += `<tr> 
    <td>${r.name} </td>
    
    <td>${r.imageurl}</td>
    <td>${r.price}</td>
    <td>${r.description}</td>
            
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("courselist").innerHTML = tab;
}