function newItem(){

    //add new item to list
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
      alert('You must write something!');
    } else {
      let list = $('#list');
      list.append(li);
    }

    //add strikethrough
    function crossOut() {
        li.toggleClass("strike");
    }

    li.on('dblclick', function crossOut() {
            li.toggleClass("strike");
    });

    //adding delete button
    let deleteButton = $('<deleteButton></deleteButton>');
    deleteButton.append(document.createTextNode('X'));
    li.append(deleteButton);

    function deleteListItem() {
    li.addClass("delete");
    }

    deleteButton.on("click", deleteListItem);

    //allow reordering/sorting
    $('#list').sortable();

}

/*run newItem(); if Enter key is pressed -- NOT WORKING (inside or outside newItem function)

$('#input').keydown(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(keycode == '13'){
    newItem ();
  }
});
*/