Project Nmae- 
            Rashu Boutique
            This project is all about seeling products online where customer can 
            add their products also.

Project Description- 
               This project is about E-commerce selling website.
               In which focus is on to create about me page.

References-
           https://in.pinterest.com/ (for Images)
           https://app.moqups.com/d9QFfkhdmDUr3Lq36Q9zjJmDuDEwadaM/view/page/ad64222d5 (for Wireframe)

Additional Info-
           Some References link I used-
           https://getbootstrap.com/
           https://www.w3schools.com/

Tools Used-
           Html
           Css
           Bootstrap
           Java
           Javascript
           React
           SQL
           Spring bootstrap


**Steps for connecting Database to project-

Now that we have made the implementation of the save function to consume the POST /item endpoint 
we'll implement the missing functions:

update
findByItemId
delete

1)Implement the update function.
2)Change your code so the save button calls the update function.
3)Test the update function(make sure you send an existing item id)
4)Implement the findItemById
5)Change your code so the save button calls the findItemById function.
6)Populate the item's data into the corresponding form fields.
7)Test the findItemById function (make sure you send an existing item id)
8)Implement the delete function.
9)Change your code so the save button calls the delete function.
10)Test the delete function (make sure you send an existing item id)



**Junit Testing-

1)Create a new class inside the test package called ItemServiceMySQLTest.java.
2)Annotate the ItemServiceMySQLTest.java with @SpringBootTest and 
  @TestInstance( TestInstance.Lifecycle.PER_CLASS).
3)Create a new function called saveCallsItemsRepositorySave and annotate it with @Test.
4)Add an ItemRepository attribute inside the ItemServiceMySQLTest.java and 
  annotate it with @Mock
5)Create a new function called setup and annotate it with @BeforeAll so 
  it runs before each test inside the ItemServiceMySQLTest.java.
6)Create a new attribute for the ItemService class and instantiate it with 
  ItemServiceMySQL inside the setup function(pass the itemRepository mock as constructor argument).
7)Write the code inside the saveCallsItemsRepositorySave function
 so the itemService.save method is invoked and check for the interaction with the itemRepository mock using the verify function.
                