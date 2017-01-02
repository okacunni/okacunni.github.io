$(function(){
  var $page = $('#page');
  var adjustHeight = $('#header').height();
  var $nav = $('.nav-wrapper');
  var offsetTop = $nav.offset().top;
  var isFixed = false;
  $(window).scroll(function(){
    isFixed = ($(window).scrollTop() > (offsetTop + $nav.height())) ? true : false;
    if (isFixed) {
      $page.css('padding-top', adjustHeight);
    } else {
      $page.css('padding-top', 0);
    }
    $page.toggleClass('fixed-header', isFixed);
  });
});