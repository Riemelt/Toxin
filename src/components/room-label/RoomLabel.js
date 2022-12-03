import {
  formatPrice,
} from "../../utilities/utilities.js";

class RoomLabel {
  #className = "room-label";

  #$component;
  #$price;

  constructor($parent, options = {}) {
    this.#init($parent, options);
  }

  #init($parent, {
    price = 0,
  }) {
    this.#$component = $parent.find(`.js-${this.#className}`);
    this.#$price     = this.#$component.find(`.js-${this.#className}__price-value`);

    this.#initPrice(price);
  }

  #initPrice(price) {
    const priceFormatted = formatPrice(price);
    this.#$price.html(priceFormatted);
  }
}

export default RoomLabel;