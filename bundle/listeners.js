$('.galo-item').click(function(event) {
  transformClick(event);
});

$('#clear').click(() => clearBoard());

$(document).on('click', '#clear-message', () => clearMessage());

transformClick = (event) => {
  clickedPlace({...event.target.dataset});
}
