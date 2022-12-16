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
    this.#$component   = $parent.find(`.js-${this.#className}`);
    this.#$description = this.#$component.find(`.js-${this.#className}__description`);
  }
}

export default Label;