import "../../components/container";
import Label from "../../components/label";

class Cards {
  #$component;

  constructor($element) {
    this.#init($element);
  }

  #init($element) {
    this.#$component = $element;
    new Label(this.#$component);
  }
}

export default Cards;