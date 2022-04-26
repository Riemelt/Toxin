import IMask from "imask";

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

    if (this.#isMasked(this.#$inputField.data())) {
      this.#setMask();
    }
  }

  #setMask() {
    const maskOptions = {
      mask: Date,
      min: new Date(),
      max: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
    };
    const mask = IMask(this.#$input.get(0), maskOptions);
  }

  #isMasked(data) {
    return data.hasOwnProperty("mask");
  }
}

export default InputField;