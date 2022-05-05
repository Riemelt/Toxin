import Expander from "./expander";

(function($){

  $(".js-expander").each(function () {
    new Expander($(this));
  });
  
})(jQuery);