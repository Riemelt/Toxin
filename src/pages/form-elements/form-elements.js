import DropdownCounter from "../../components/dropdown-counter/dropdown-counter.js";
import InputField from "../../components/input-field/input-field.js";

(function($){
  $(".js-form-elements__dropdown-counter").each(function () {
    new DropdownCounter($(this));
  });

  $(".js-form-elements__input-field").each(function () {
    new InputField($(this));
  });
})(jQuery);