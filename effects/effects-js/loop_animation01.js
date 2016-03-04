jQuery.noConflict();
(function($) {
  $(function() {
      $("#startAnimation").click(function() {
        for (var i = 0; i < 10; i++) {
          console.log(i);
          $("#bluePng01").hide(1000);
          $("#bluePng01").show(1000);
        
             $("#stopAnimation").click(function() {
               $("#bluePng01").stop();
             });
        }
  });
});
})(jQuery);

;(function() {
  "use strict";
  console.log("ok");

  for (var j = 0; j < 10; j++) {
    console.log(j);
  }
})();

