import {
  $getElement,
  formatPrice,
} from '../../utilities/utilities.js';

class RoomLabel {
  #className = 'room-label';

  #$component;
  #$price;

  constructor({
    $parent,
    options = {},
  }) {
    this.#init($parent, options);
  }

  #init($parent, {
    price = 0,
  }) {
    this.#$component = $parent.find(`.js-${this.#className}`);
    this.#$price = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'price-value',
    });

    this.#initPrice(price);
  }

  #initPrice(price) {
    const priceFormatted = formatPrice(price);
    this.#$price.html(priceFormatted);
  }
}

export default RoomLabel;
