// Prints Icon to a given position
printIcon = (positionObject, isPlayerOne = true) => {
  const iconClass = isPlayerOne ? 'fas fa-times' : 'far fa-circle';
  const html =`<i class="${iconClass}"></i>`;
  elementBuilder(positionObject).html(html);
}

printMessage = (message) => {
  const html = `${message}<span id="clear-message"><i class="fas fa-times-circle"></i></span>`;
  $('#message').html(html);
}

clearBoard = () => {
  const items = $('.galo-item');
  for(var i = 0; i < items.length; i++) {
    $(items[i]).html("");
  }
}

clearMessage = () => {
  $('#message').html("");
}
