import DropdownCounter    from "../dropdown-counter";
import DropdownDatepicker from "../dropdown-datepicker";

import "../button";
import "../card";

class CardSearch {
  #className = "card-search";

  #$component;
  #dropdownDatepicker;
  #dropdownGuests;

  constructor($parent, options = {}) {
    this.#init($parent, options);
  }

  #init($parent, {
    dropdownDatepicker = {},
    dropdownGuests = {},
  }) {
    this.#$component = $parent.find(`.js-${this.#className}`);
    this.#dropdownDatepicker = new DropdownDatepicker(this.#$component.find(`.js-${this.#className}__datepicker`), dropdownDatepicker);
    this.#dropdownGuests = new DropdownCounter(this.#$component.find(`.js-${this.#className}__dropdown-guests`), dropdownGuests);
  }
}

export default CardSearch;