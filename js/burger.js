$(document).ready(function() {
  $('.burger').click(function() {
    $(this).toggleClass('on');
    $('.burger-menu').toggleClass('active');
    });
    $('.burger-menu li').click(function() {
      $('.burger').removeClass('on');
      $('.burger-menu').removeClass('active');
      });
});
