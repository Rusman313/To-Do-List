//add item to list
$('#btn').click(function getInput(){
  var newTask = $('#input').val()//gets the value of the input
  $('#list').append('<li>' + newTask + '</li>').addClass('list-group-item-info');// adds the new task to the ul with a class
   // $('#list').append('<li class="list-group-item-info" id="li">' + newTask + '</li>');
  $('#input').val("")//clears input field
})

//remove item
$('ul').click(function garbage(event){
    var target=event.target;//targets the item
    if ( target.tagName.toLowerCase() === "li") {// if the target, tag name (in lowercase) = li then
        target.remove();// remove the item
    };
    })
