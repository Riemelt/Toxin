import IMask from 'imask';

import {
  $getElement,
} from '../../utilities/utilities';
import '../label';

class InputField {
  #className = 'input-field';
  #$component;

  #$input;

  #minDate;
  #maxDate;

  constructor({
    $parent,
    options = {}
  }) {
    this.#init($parent, options);
  }

  toggleExpand() {
    this.#$component.toggleClass(`${this.#className}_opened`);
  }

  closeExpand() {
    this.#$component.removeClass(`${this.#className}_opened`);
  }

  setInputText(text) {
    this.#$input.prop('value', text);
  }

  getInput() {
    return this.#$input;
  }

  #init($parent, options) {
    this.#$component = $parent.find(`.js-${this.#className}`);
    this.#$input = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'input',
    });

    const {
      isMasked = false,
      minDate  = new Date('01.01.1900'),
      maxDate  = new Date(),
    } = options;

    if (isMasked) {
      this.#minDate = new Date(minDate);
      this.#maxDate = new Date(maxDate);
      this.#setMask();
    }
  }

  #setMask() {
    const maskOptions = {
      mask: Date,
      min:  this.#minDate,
      max:  this.#maxDate,
    };

    IMask(this.#$input.get(0), maskOptions);
  }
}

export default InputField;