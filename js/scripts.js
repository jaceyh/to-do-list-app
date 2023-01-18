function newItem(){

    let li = $('<li></li>');
    $('body').append(li);
    
    let inputValue = $('#input').val();
    $('body').append(inputValue);
  
    let text = $('<text></text>');
    $('body').append(text);
  
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      let list = $('#list');
      list.append(li);
    }
}