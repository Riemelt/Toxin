import data from "./data.json";

import DropdownCounter from "../../components/dropdown-counter"
import InputField from "../../components/input-field";
import DropdownDatepicker from "../../components/dropdown-datepicker";
import LikeButton from "../../components/like-button";
import RangeSlider from "../../components/range-slider";
import Pagination from "../../components/pagination";

import "../../components/container";
import "../../components/label";
import "../../components/checkbox-list";
import "../../components/radio-buttons-field";
import "../../components/toggle-switch";
import "../../components/rate-button";
import "../../components/button";


class FormElements {
  #className = "form-elements";

  #$component;

  constructor($element) {
    this.#init($element);
  }

  #init($element) {
    this.#$component = $element;

    new DropdownCounter($(`.js-${this.#className}__dropdown-default`, this.#$component));
    new InputField($(`.js-${this.#className}__input-field-masked`, this.#$component), data.inputFieldMasked);
    new DropdownDatepicker($(`.js-${this.#className}__date-dropdown-double`, this.#$component), data.dateDropdownDouble);
    new DropdownDatepicker($(`.js-${this.#className}__date-dropdown-single`, this.#$component), data.dateDropdownSingle);
    new LikeButton($(`.js-${this.#className}__like-button-default`, this.#$component));
    new LikeButton($(`.js-${this.#className}__like-button-active`, this.#$component));
    new RangeSlider($(`.js-${this.#className}__range-slider`, this.#$component));
    new Pagination($(`.js-${this.#className}__pagination-wrapper`, this.#$component), data.pagination);
  }
}

export default FormElements;