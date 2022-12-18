import {
  $getElement,
} from '../../utilities/utilities';
import InputField from '../input-field';
import '../button';
import '../card';
import '../radio-buttons-field';
import '../toggle-switch';

class CardRegistration {
  #className = 'card-registration';
  #$component;

  constructor({
    $parent,
    options = {},
  }) {
    this.#init($parent, options);
  }

  #init($parent, {
    inputBirthDate = {},
  }) {
    this.#$component = $parent.find(`.js-${this.#className}`);

    const $inputBirthDate = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'input-birth-date',
    });

    new InputField({
      $parent: $inputBirthDate,
      options: inputBirthDate,
    });
  }
}

export default CardRegistration;
