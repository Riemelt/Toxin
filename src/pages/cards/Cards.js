import {
  $getElement,
} from '../../utilities/utilities';
import CardRegistration from '../../components/card-registration';
import CardReservation  from '../../components/card-reservation';
import CardRoom         from '../../components/card-room';
import CardSearch       from '../../components/card-search';
import Datepicker       from '../../components/datepicker';
import '../../components/header-ui-kit';
import '../../components/card-sign-in';
import '../../components/container';

class Cards {
  #className = 'cards';
  #$component;

  constructor({
    $element,
    options = {},
  }) {
    this.#init($element, options);
  }

  #init($element, {
    cardDatepicker = {},
    cardRoomFocused = {},
    cardRoomDefault = {},
    cardSearch = {},
    cardRegistration = {},
    cardReservation = {},
  }) {
    this.#$component = $element;

    const $cardDatepicker = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'card-datepicker',
    });

    new Datepicker({
      $parent: $cardDatepicker,
      options: cardDatepicker,
    });

    const $cardRoomFocused = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'card-room-focused',
    });

    new CardRoom({
      $parent: $cardRoomFocused,
      options: cardRoomFocused,
    });

    const $cardRoomDefault = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'card-room-default',
    });

    new CardRoom({
      $parent: $cardRoomDefault,
      options: cardRoomDefault,
    });

    const $cardSearch = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'card-search',
    });

    new CardSearch({
      $parent: $cardSearch,
      options: cardSearch,
    });

    const $cardRegistration = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'card-registration',
    });

    new CardRegistration({
      $parent: $cardRegistration,
      options: cardRegistration,
    });

    const $cardReservation = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'card-reservation',
    });

    new CardReservation({
      $parent: $cardReservation,
      options: cardReservation,
    });
  }
}

export default Cards;