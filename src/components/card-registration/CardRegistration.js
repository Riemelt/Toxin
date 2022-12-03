import InputField from "../input-field";

import "../button";
import "../card";
import "../radio-buttons-field";
import "../toggle-switch";

class CardRegistration {
  #className = "card-registration";

  #$component;

  constructor($parent, options = {}) {
    this.#init($parent, options);
  }

  #init($parent, {
    inputBirthDate = {},
  }) {
    this.#$component = $parent.find(`.js-${this.#className}`);
    new InputField(this.#$component.find(`.js-${this.#className}__input-birth-date`), inputBirthDate);
  }
}

export default CardRegistration;