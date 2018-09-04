$('.galo-item').click(function(event) {
  clickedPlace({...event.target.dataset});
});

$('#clear').click(() => clearBoard());

$(document).on('click', '#clear-message', () => clearMessage());
