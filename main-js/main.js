jQuery.noConflict();
(function($) {
  $(function() {
    $("output").text("jQuery test : jQuery.noConflict(); and text();");
  });
})(jQuery);

;(function() {
  "use strict";
  console.log("ok");
})();