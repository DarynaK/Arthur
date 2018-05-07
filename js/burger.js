$(document).ready(function() {
  $('.burger').click(function() {
    $('.burger-menu').toggleClass('active');
    });
    $('.burger-menu li').click(function() {
      $('.burger-menu').removeClass('active');
      });
});
