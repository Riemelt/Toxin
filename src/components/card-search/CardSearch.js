import {
  $getElement,
} from '../../utilities/utilities';
import DropdownCounter from '../dropdown-counter';
import DropdownDatepicker from '../dropdown-datepicker';
import '../button';
import '../card';

class CardSearch {
  #className = 'card-search';

  #$component;

  constructor({
    $parent,
    options = {},
  }) {
    this.#init($parent, options);
  }

  #init($parent, {
    dropdownDatepicker = {},
    dropdownGuests = {},
  }) {
    this.#$component = $parent.find(`.js-${this.#className}`);

    const $datepicker = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'datepicker',
    });

    new DropdownDatepicker({
      $parent: $datepicker,
      options: dropdownDatepicker,
    });

    const $dropdownGuests = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'dropdown-guests',
    });

    new DropdownCounter({
      $parent: $dropdownGuests,
      options: dropdownGuests,
    });
  }
}

export default CardSearch;
