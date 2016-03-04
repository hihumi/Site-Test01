jQuery.noConflict();
(function($) {
  $(function() {
    $("#startAnimate").click(function() {
      $("#redPng01").animate({
        width: 40,
        height: 40
      });
    });
  });
})(jQuery);
