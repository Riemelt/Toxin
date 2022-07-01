import data from "./data.json";

import CardRoom from "../../components/card-room";
import CardSearch from "../../components/card-search";

import "../../components/header-ui-kit";
import "../../components/container";
import "../../components/card";
import "../../components/card-sign-in";

class Cards {
  #className = "cards";
  #$component;

  constructor($element) {
    this.#init($element);
  }

  #init($element) {
    this.#$component = $element;

    new CardRoom(($(`.js-${this.#className}__card-room-focused`), this.#$component), data.cardRoomFocused);
    new CardSearch(($(`.js-${this.#className}__card-search`), this.#$component), data.cardSearch);

  }
}

export default Cards;