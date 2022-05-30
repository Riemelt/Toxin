import data from "./data.json";

import DropdownCounter from "../../components/dropdown-counter/dropdown-counter.js"
import InputField from "../../components/input-field/input-field.js";
import DropdownDatepicker from "../../components/dropdown-datepicker/dropdown-datepicker.js";
import LikeButton from "../../components/like-button/like-button.js";
import RangeSlider from "../../components/range-slider/range-slider.js";
import Pagination from "../../components/pagination/pagination.js"

(function($){

  const className = "form-elements";

  new DropdownCounter($(`.js-${className}__dropdown-default`));
  new InputField($(`.js-${className}__input-field-masked`), data.inputFieldMasked);
  new DropdownDatepicker($(`.js-${className}__date-dropdown-double`), data.dateDropdownDouble);
  new DropdownDatepicker($(`.js-${className}__date-dropdown-single`), data.dateDropdownSingle);
  new LikeButton($(`.js-${className}__like-button-default`));
  new LikeButton($(`.js-${className}__like-button-active`));
  new RangeSlider($(`.js-${className}__range-slider`));
  new Pagination($(`.js-${className}__pagination-wrapper`), data.pagination);

})(jQuery);