import DropdownDatepicker from "../dropdown-datepicker";

import "../card";
import "../input-field";
import "../radio-buttons-field";
import "../toggle-switch";
import "../button";

class CardRegistration {
  #className = "card-registration";

  #$component;
  #dropdownBirthDate;

  constructor($parent, options = {}) {
    this.#init($parent, options);
  }

  #init($parent, {
    dropdownBirthDate = {},
  }) {
    this.#$component = $parent.find(`.js-${this.#className}`);
    this.#dropdownBirthDate = new DropdownDatepicker(this.#$component.find(`.js-${this.#className}__dropdown-birth-date`), dropdownBirthDate);
  }
}

export default CardRegistration;