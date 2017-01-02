$(function(){
  var $win = $(window);
  var $body = $('body');
  var $page = $('#page');
  var adjustHeight = $('#header').height();
  var $nav = $('.nav-wrapper');
  var offsetTop = $nav.offset().top;
  var isFixed = false;
  $win.resize(function(){
    adjustHeight = $('#header').height();
    $page.css('padding-top', 0);
  });
  $win.scroll(function(){
    if ($win.width() > 736) return false;
    isFixed = ($win.scrollTop() > (offsetTop + $nav.height())) ? true : false;
    if (isFixed) {
      $page.css('padding-top', adjustHeight);
    } else {
      $page.css('padding-top', 0);
    }
    $body.toggleClass('fixed-header', isFixed);
  });
});