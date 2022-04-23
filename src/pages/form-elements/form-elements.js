import DropdownCounter from "../../components/dropdown-counter/dropdown-counter.js";

(function($){
  $(".js-form-elements__dropdown-counter").each(function () {
    new DropdownCounter($(this));
  });
})(jQuery);