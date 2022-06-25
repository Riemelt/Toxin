import data from "./data.json";

import CardRoom from "../../components/card-room";

import "../../components/header-ui-kit";
import "../../components/container";

class Cards {
  #className = "cards";
  #$component;

  constructor($element) {
    this.#init($element);
  }

  #init($element) {
    this.#$component = $element;

    new CardRoom(($(`.js-${this.#className}__card-room-focused`), this.#$component), data.cardRoomFocused);

  }
}

export default Cards;