import {
  $getElement,
} from '../../utilities/utilities';

class Label {
  #className = 'label';

  #$component;
  #$description;

  constructor($parent) {
    this.#init($parent);
  }

  setDescription(text) {
    this.#$description?.html(text);
  }

  #init($parent) {
    this.#$component = $parent.find(`.js-${this.#className}`);
    this.#$description = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'description',
    });
  }
}

export default Label;
