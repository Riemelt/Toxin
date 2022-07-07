import data from "./data.json";

import CardRoom from "../../components/card-room";
import CardSearch from "../../components/card-search";
import CardRegistration from "../../components/card-registration";
import CardReservation from "../../components/card-reservation";
import Datepicker from "../../components/datepicker";

import "../../components/header-ui-kit";
import "../../components/container";
import "../../components/card-sign-in";

class Cards {
  #className = "cards";
  #$component;

  constructor($element) {
    this.#init($element);
  }

  #init($element) {
    this.#$component = $element;
    new Datepicker($(`.js-${this.#className}__card-datepicker`, this.#$component), data.cardDatepicker);
    new CardRoom($(`.js-${this.#className}__card-room-focused`, this.#$component), data.cardRoomFocused);
    new CardRoom($(`.js-${this.#className}__card-room-default`, this.#$component), data.cardRoomDefault);
    new CardSearch($(`.js-${this.#className}__card-search`, this.#$component), data.cardSearch);
    new CardRegistration($(`.js-${this.#className}__card-registration`, this.#$component), data.cardRegistration);
    new CardReservation($(`.js-${this.#className}__card-reservation`, this.#$component), data.cardReservation);
  }
}

export default Cards;