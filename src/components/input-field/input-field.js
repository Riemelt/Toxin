import IMask from "imask";

class InputField {
  #className = "input-field";

  #$inputField;
  #$input;

  #minDate;
  #maxDate;

  constructor($parent, options = {}) {
    this.#init($parent, options);
  }

  toggleExpand() {
    this.#$inputField.toggleClass(`${this.#className}_opened`);
  }

  closeExpand() {
    this.#$inputField.removeClass(`${this.#className}_opened`);
  }

  setInputText(text) {
    this.#$input.prop("value", text);
  }

  getInput() {
    return this.#$input;
  }

  #init($parent, options) {
    this.#$inputField = $parent.find(`.js-${this.#className}`);
    this.#$input = $parent.find(`.js-${this.#className}__input`);

    const { isMasked = false } = options;

    if (isMasked) {
      this.#minDate = new Date();
      this.#maxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1))
      this.#setMask();
    }
  }

  #setMask() {
    const maskOptions = {
      mask: Date,
      min: this.#minDate,
      max: this.#maxDate,
    };
    IMask(this.#$input.get(0), maskOptions);
  }
}

export default InputField;