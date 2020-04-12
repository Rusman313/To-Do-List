console.log("test");// testing that the js is linked to the html 
var btn = document.getElementById('btn');//button
var list = document.getElementById('list');// ul
var input = document.getElementById('input');// gets the value of the text input

// add item to list
btn.addEventListener('click', function getInput (){  
   var newTask = document.createElement('li');//creates a new li item     
   newTask.classList.add('list-group-item-primary')//adds the class element/styling to the new task created.
   newTask.innerHTML = input.value;//will take new li item and insert the value from the input field
   list.appendChild(newTask);// adds to the end of the list          
document.getElementById('input').value = ''// clears the input field
})

// remove we are adding an event listener to the ul when it clicks on a list item it run the function 
list.addEventListener('click', function garbage(event){
    var target=event.target;//targets the item
    if ( target.tagName.toLowerCase() === "li") {// if the target, tag name (in lowercase) = li then
        target.remove();// remove the item
    };
    })



