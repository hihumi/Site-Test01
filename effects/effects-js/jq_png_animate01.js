jQuery.noConflict();
(function($) {
  $(function() {
    $("#start_animate").click(function() {
      $("#red_png01").animate({
        width: 40,
        height: 40
      });
    });
  });
})(jQuery);
