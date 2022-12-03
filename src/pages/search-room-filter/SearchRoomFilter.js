import DropdownDatepicker from "../../components/dropdown-datepicker";
import DropdownCounter    from "../../components/dropdown-counter";
import RangeSlider        from "../../components/range-slider";
import Expander           from "../../components/expander";
import CardRoom           from "../../components/card-room";
import Pagination         from "../../components/pagination";
import "../../components/container";
import "../../components/checkbox-list";

class SearchRoomFilter {
  #className = "search-room-filter";
  #$component;

  #data = {};
  #$cardRooms;

  constructor($element, data = {}) {
    this.#init($element, data);
  }

  #init($element, data) {
    this.#data       = data;
    this.#$component = $element;

    new DropdownDatepicker(this.#$component.find(`.js-${this.#className}__date-dropdown`), this.#data.dateDropdown);
    new DropdownCounter(this.#$component.find(`.js-${this.#className}__guests-dropdown`), this.#data.guestsDropdown);
    new RangeSlider(this.#$component.find(`.js-${this.#className}__price-range`), this.#data.priceRange);
    new DropdownCounter(this.#$component.find(`.js-${this.#className}__comforts-dropdown`), this.#data.comfortsDropdown);
    new Expander(this.#$component.find(`.js-${this.#className}__comforts-additional-expander`));

    this.#$cardRooms = this.#$component.find(`.js-${this.#className}__card-room`);
    this.#$cardRooms.each(this.#initCardRooms.bind(this));

    new Pagination(this.#$component.find(`.js-${this.#className}__pagination`), this.#data.pagination);
  }

  #initCardRooms(index, element) {
    const $element = $(element);
    new CardRoom($element, this.#data.cardRooms[index]);
  }
}

export default SearchRoomFilter;