import RoomLabel from "../room-label";
import DropdownDatepicker from "../dropdown-datepicker";
import DropdownCounter from "../dropdown-counter";
import RoomPriceItem from "../room-price-item";

import { formatPrice } from "../../utilities/utilities.js";

import "../card";
import "../button";

class CardReservation {
  #className = "card-reservation";

  #$component;
  #options;
  #label;
  #dropdownDatepicker;
  #dropdownGuests;
  #$roomPriceItems;
  #roomPriceItems = [];
  #$totalPrice;

  constructor($parent, options = {}) {
    this.#init($parent, options);
  }

  #init($parent, options) {
    this.#options = options;
    this.#$component = $parent.find(`.js-${this.#className}`);

    const {
      roomLabel = {},
      dropdownDatepicker = {},
      dropdownGuests = {},
    } = options;

    this.#label = new RoomLabel(this.#$component.find(`.js-${this.#className}__label`), roomLabel);
    this.#dropdownDatepicker = new DropdownDatepicker(this.#$component.find(`.js-${this.#className}__dropdown-datepicker`), {
      handleApplyButtonClick: this.#handleApplyButtonClick.bind(this),
      ...dropdownDatepicker,
    });
    this.#dropdownGuests = new DropdownCounter(this.#$component.find(`.js-${this.#className}__dropdown-guests`), dropdownGuests);

    this.#$roomPriceItems = this.#$component.find(`.js-${this.#className}__room-price-item`);
    this.#$roomPriceItems.each(this.#initRoomPriceItem.bind(this));

    this.#$totalPrice = this.#$component.find(`.js-${this.#className}__total-price-value`);
    this.#updateTotalPrice();
  }

  #getTotalPrice() {
    let total = 0;

    this.#roomPriceItems.forEach(element => {
      total += element.getPrice();
    });

    return total > 0 ? total : 0;
  }

  #updateTotalPrice() {
    const totalPrice = formatPrice(this.#getTotalPrice());
    this.#$totalPrice.html(totalPrice);
  }

  #initRoomPriceItem(index, element) {
    const $priceItem = $(element);
    const {
      roomPriceItems = [],
      roomLabel: {
        price = 0,
      },
    } = this.#options;
    const daysOfStay = this.#dropdownDatepicker.getDaysOfStay();

    this.#roomPriceItems.push(
      new RoomPriceItem($priceItem, {
        ...roomPriceItems[index],
        roomPrice: price,
        daysOfStay,
      })
    );
  }

  #updateRoomPriceItems() {
    const daysOfStay = this.#dropdownDatepicker.getDaysOfStay();
    
    this.#roomPriceItems.forEach(element => {
      element.setDaysOfStay(daysOfStay);
      element.update();
    });
  }

  #handleApplyButtonClick() {
    this.#updateRoomPriceItems();
    this.#updateTotalPrice();
  }
}

export default CardReservation;