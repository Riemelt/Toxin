import DropdownCounter from "../../components/dropdown-counter/dropdown-counter.js";
import InputField from "../../components/input-field/input-field.js";
import DropdownDatepicker from "../../components/dropdown-datepicker/dropdown-datepicker.js";

(function($){
  $(".js-form-elements__dropdown-counter").each(function () {
    new DropdownCounter($(this));
  });

  $(".js-form-elements__input-field").each(function () {
    new InputField($(this));
  });

  $(".js-form-elements__dropdown-datepicker").each(function () {
    new DropdownDatepicker($(this));
  });
  
})(jQuery);