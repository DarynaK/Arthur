$(document).ready(function() {
  $('.burger').click(function() {
    $('.overlay').fadeToggle();
  });
  $('li').click(function(){
    $('.overlay').fadeOut();
  });
});
