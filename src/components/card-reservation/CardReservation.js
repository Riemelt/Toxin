import {
  formatPrice,
  $getElement,
} from '../../utilities/utilities.js';
import DropdownCounter    from '../dropdown-counter';
import DropdownDatepicker from '../dropdown-datepicker';
import RoomLabel          from '../room-label';
import RoomPriceItem      from '../room-price-item';
import '../button';
import '../card';

class CardReservation {
  #className = 'card-reservation';

  #$component;
  #options;
  #dropdownDatepicker;
  #$roomPriceItems;
  #roomPriceItems = [];
  #$totalPrice;

  constructor({
    $parent,
    options = {}
  }) {
    this.#init($parent, options);
  }

  #init($parent, options) {
    this.#options = options;
    this.#$component = $parent.find(`.js-${this.#className}`);

    const {
      roomLabel          = {},
      dropdownDatepicker = {},
      dropdownGuests     = {},
    } = options;

    const $label = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'label',
    });

    new RoomLabel({
      $parent: $label,
      options: roomLabel,
    });

    const $dropdownDatepicker = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'dropdown-datepicker',
    });

    this.#dropdownDatepicker = new DropdownDatepicker({
      $parent: $dropdownDatepicker,
      options: {
        handleApplyButtonClick: this.#handleApplyButtonClick.bind(this),
        ...dropdownDatepicker,
      },
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

    this.#$roomPriceItems = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'room-price-item',
    });

    this.#$roomPriceItems.each(this.#initRoomPriceItem.bind(this));

    this.#$totalPrice = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'total-price-value',
    });

    this.#updateTotalPrice();
  }

  #updateTotalPrice() {
    const totalPrice = formatPrice(this.#getTotalPrice());
    this.#$totalPrice.html(totalPrice);
  }

  #getTotalPrice() {
    let total = 0;

    this.#roomPriceItems.forEach(element => {
      total += element.getPrice();
    });

    return total > 0 ? total : 0;
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
      new RoomPriceItem({
        $parent: $priceItem,
        options: {
          ...roomPriceItems[index],
          roomPrice: price,
          daysOfStay,
        },
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