//add item to list
$('#btn').click(function getInput(){
  var newTask = $('#input').val()
    $('#list').append('<li class="list-group-item-info">' + newTask + '</li>');
})

//remove item
$("li").click(function(){
    $(this).remove();
});
