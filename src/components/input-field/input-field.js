class InputField {
  #className = "input-field";

  #$inputField;
  #$input;

  constructor($parent) {
    this.#init($parent);
  }

  toggleExpand() {
    this.#$inputField.toggleClass(`${this.#className}_opened`);
  }

  closeExpand() {
    this.#$inputField.removeClass(`${this.#className}_opened`);
  }

  setInputText(text) {
    this.#$input.prop("placeholder", text);
  }

  #init($parent) {
    this.#$inputField = $parent.find(`.js-${this.#className}`);
    this.#$input = $parent.find(`.js-${this.#className}__input`);
  }
}

export default InputField;