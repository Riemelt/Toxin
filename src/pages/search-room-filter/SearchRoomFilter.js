import DropdownDatepicker from '../../components/dropdown-datepicker';
import DropdownCounter    from '../../components/dropdown-counter';
import RangeSlider        from '../../components/range-slider';
import Expander           from '../../components/expander';
import CardRoom           from '../../components/card-room';
import Pagination         from '../../components/pagination';
import '../../components/container';
import '../../components/checkbox-list';
import {
  $getElement,
} from '../../utilities/utilities';

class SearchRoomFilter {
  #className = 'search-room-filter';
  #$component;

  #options = {};
  #$cardRooms;

  constructor({
    $element,
    options = {},
  }) {
    this.#init($element, options);
  }

  #init($element, options) {
    this.#options = options;
    this.#$component = $element;

    const $dropdownDatepicker = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'date-dropdown',
    });

    new DropdownDatepicker({
      $parent: $dropdownDatepicker,
      options: this.#options.dateDropdown,
    });

    const $dropdownGuests = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'guests-dropdown',
    });
    
    new DropdownCounter({
      $parent: $dropdownGuests,
      options: this.#options.guestsDropdown,
    });

    const $rangeSlider = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'price-range',
    });
    
    new RangeSlider({
      $parent: $rangeSlider,
      options: this.#options.priceRange,
    });

    const $dropdownComforts = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'comforts-dropdown',
    });
    
    new DropdownCounter({
      $parent: $dropdownComforts,
      options: this.#options.comfortsDropdown,
    });

    const $expander = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'comforts-additional-expander',
    });

    new Expander($expander);

    this.#$cardRooms = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'card-room',
    });

    this.#$cardRooms.each(this.#initCardRooms.bind(this));

    const $pagination = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'pagination',
    });
    
    new Pagination({
      $parent: $pagination,
      options: this.#options.pagination,
    });
  }

  #initCardRooms(index, element) {
    const $element = $(element);
    new CardRoom({
      $parent: $element,
      options: this.#options.cardRooms[index],
    });
  }
}

export default SearchRoomFilter;