jQuery.noConflict();
(function($) {
  $(function() {
    $("#startAnimation").click(function() {
      $(".p01").text("Please Wait a second...").css({ "color" : "red" });
      $("#greenPng01").animate({ width: 40}, 700)
                      .animate({ height: 40}, 700)
                      .animate({ opacity: 0.01}, 700)
                      .animate({ width: 0}, 700)
                      .animate({ height: 0}, 700)
                      .animate({ opacity: 1.0}, 700)
                      .queue(function() { 
                         $(this).css({ "border" : "200px solid red" });
                         $(this).dequeue();
                      }).queue(function() {
                          $(".p01").text("OK!").css({ "color" : "green" });
                          $("output").text("Once again? Please click reload button.").css({ "color" : "blue" });
                          $(this).dequeue();
                         });
      });
  });

  $(function() {
    $("#reloadButton").click(function() {
      location.reload();
    });
  });

})(jQuery);