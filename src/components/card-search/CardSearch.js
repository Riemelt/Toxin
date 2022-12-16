import DropdownCounter    from '../dropdown-counter';
import DropdownDatepicker from '../dropdown-datepicker';
import '../button';
import '../card';

class CardSearch {
  #className = 'card-search';

  #$component;

  constructor($parent, options = {}) {
    this.#init($parent, options);
  }

  #init($parent, {
    dropdownDatepicker = {},
    dropdownGuests     = {},
  }) {
    this.#$component = $parent.find(`.js-${this.#className}`);

    new DropdownDatepicker(this.#$component.find(`.js-${this.#className}__datepicker`), dropdownDatepicker);
    new DropdownCounter(this.#$component.find(`.js-${this.#className}__dropdown-guests`), dropdownGuests);
  }
}

export default CardSearch;