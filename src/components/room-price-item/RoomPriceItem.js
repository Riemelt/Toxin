import {
  formatPrice,
  declOfNum,
} from '../../utilities/utilities.js'

class RoomPriceItem {
  #className = 'room-price-item';

  #$component;
  #options;
  #$content;
  #$price;
  #theme;

  static #DICTIONARY = ['сутки', 'суток', 'суток'];

  #contentUpdater = {
    roomPrice:    this.#updateRoomPrice.bind(this),
    discount:     this.#updateDiscount.bind(this),
    servicePrice: this.#updateServicePrice.bind(this),
  };

  #priceGetter = {
    roomPrice:    this.#getRoomPrice.bind(this),
    discount:     this.#getDiscount.bind(this),
    servicePrice: this.#getServicePrice.bind(this),
  };

  constructor($parent, options = {}) {
    this.#init($parent, options);
  }

  getPrice() {
    return this.#priceGetter[this.#theme]();
  }

  setDaysOfStay(daysOfStay) {
    this.#options.daysOfStay = daysOfStay;
  }

  update() {
    this.#contentUpdater[this.#theme]();
  }

  #getRoomPrice() {
    const {
      roomPrice = 0,
      daysOfStay = 0,
    } = this.#options;
    
    return roomPrice * daysOfStay;
  }

  #getDiscount() {
    const { discount = 0 } = this.#options;
    return -discount;
  }

  #getServicePrice() {
    const { price = 0 } = this.#options;
    return price;
  }

  #init($parent, options = {}) {
    this.#options    = options;
    this.#$component = $parent.find(`.js-${this.#className}`);
    this.#$content   = this.#$component.find(`.js-${this.#className}__content`);
    this.#$price     = this.#$component.find(`.js-${this.#className}__price`);

    const { theme = 'roomPrice' } = this.#options;
    this.#theme = theme;
    this.#contentUpdater[theme]();
  }

  #updateContent(content) {
    this.#$content.html(content);
  }

  #updatePrice(price) {
    this.#$price.html(price);
  }

  #updateRoomPrice() {
    const {
      roomPrice  = 0,
      daysOfStay = 0,
    } = this.#options;

    const contentText = `${formatPrice(roomPrice)} х ${daysOfStay} ${declOfNum(daysOfStay, RoomPriceItem.#DICTIONARY)}`;
    this.#updateContent(contentText);

    const priceText = formatPrice(roomPrice * daysOfStay);
    this.#updatePrice(priceText);
  }

  #updateDiscount() {
    const {
      discount = 0,
      content  = '',
    } = this.#options;

    const contentText = `${content} ${formatPrice(discount)}`;
    this.#updateContent(contentText);

    const priceText = formatPrice(0);
    this.#updatePrice(priceText);
  }

  #updateServicePrice() {
    const {
      price   = 0,
      content = '',
    } = this.#options;

    this.#updateContent(content);

    const priceText = formatPrice(price);
    this.#updatePrice(priceText);
  }
}

export default RoomPriceItem;