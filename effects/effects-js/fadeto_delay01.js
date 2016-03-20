jQuery.noConflict();
(function($) {
  $(function() {
    $("#redPng01").click(function() {
      $(this).fadeTo(2000, 0.2).delay(1000).fadeTo(2000, 1.0);
      $(".op01").text("ok!").css({"color" : "red"});
    });
  });

  $(function() {
    $("#greenPng01").click(function() {
      $(this).fadeTo(2000, 0.2).delay(1000).fadeTo(2000, 1.0);
      $(".op02").text("ok!").css({"color" : "green"});
    });
  });

  $(function() {
    $("#bluePng01").click(function() {
      $(this).fadeTo(2000, 0.2).delay(1000).fadeTo(2000, 1.0);
      $(".op03").text("ok!").css({"color" : "blue"});
    });
  });

  $(function() {
    $("#reloadBtn").click(function() {
      location.reload();
    });
  });
})(jQuery);