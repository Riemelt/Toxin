import InputField from "../input-field/input-field";
import Datepicker from "../datepicker/datepicker";

class DropdownDatepicker {

  #className = "dropdown-datepicker";

  #$component;
  #$inputWrapper;
  #inputs = [];
  #datepicker;

  #inputMode = DropdownDatepicker.#SINGLE_MODE;

  static #SINGLE_MODE = "single";
  static #MULTIPLE_MODE = "multiple";

  static #PLACEHOLDER = "ДД.ММ.ГГГГ";

  constructor($parent) {
    this.#init($parent);
    this.#render();
  }

  #init($parent) {
    this.#$component = $parent.find(`.js-${this.#className}`);
    this.#$inputWrapper = this.#$component.find(`.js-${this.#className}__input-wrapper`);

    const data = this.#$component.data();
    this.#initInputs(data);

    if (this.#withTwoInputs(data)) {
      this.#inputMode = DropdownDatepicker.#MULTIPLE_MODE;
    }

    this.#datepicker = new Datepicker(this.#$component, {
      handleApplyButtonClick: this.#handleApplyButtonClick.bind(this),
      handleResetButtonClick: this.#handleResetButtonClick.bind(this),
    });
  }

  #initInputs(data) {
    if (this.#withTwoInputs(data)) {
      const $inputStart = this.#$component.find(`.js-${this.#className}__input-start`);
      const $inputEnd = this.#$component.find(`.js-${this.#className}__input-end`);

      this.#inputs.push(
        new InputField($inputStart),
        new InputField($inputEnd),
        )
    } else {
      const $inputSingle = this.#$component.find(`.js-${this.#className}__input-single`);
      this.#inputs.push(new InputField($inputSingle))
    }
  }

  #withTwoInputs(data) {
    return data.hasOwnProperty("withTwoInputs");
  }

  #render() {
    this.#setHandlers();
  }

  #setHandlers() {
    jQuery(this.#handleInputInit.bind(this));
    $(document).on("click.dropdown-datepicker", this.#handleDocumentClick.bind(this));
    this.#$inputWrapper.on("click.dropdown-datepicker", this.#handleInputWrapperClick.bind(this));
  }

  #handleInputWrapperClick() {
    this.#datepicker.toggle();
  }

  #handleDocumentClick(e) {
    if (!this.#isDropdown(e.target)) {
      this.#datepicker.close();
    }
  }

  #handleInputInit() {
    this.#updateDropdownDatepicker();
  }

  #updateDropdownDatepicker() {
    const dates = this.#datepicker.getDates();
    const start = dates.start ? Datepicker.parseDate(dates.start) : DropdownDatepicker.#PLACEHOLDER;
    const end = dates.end ? Datepicker.parseDate(dates.end) : DropdownDatepicker.#PLACEHOLDER;

    this.#updateInputs({ start, end }, this.#inputMode);
  }

  #updateInputs(datesText, mode) {
    if (mode === DropdownDatepicker.#SINGLE_MODE) {
      const text = `${datesText.start} - ${datesText.end}`;
      this.#inputs[0].setInputText(text);
    } else if (mode === DropdownDatepicker.#MULTIPLE_MODE) {
      this.#inputs[0].setInputText(datesText.start);
      this.#inputs[1].setInputText(datesText.end);
    }
  }

  #handleApplyButtonClick() {
    this.#updateDropdownDatepicker();
    this.#datepicker.close();
  }
  
  #handleResetButtonClick() {
    this.#inputs.forEach(input => input.setInputText(DropdownDatepicker.#PLACEHOLDER));
  }

  #isDropdown(target) {
    return this.#$component.is(target) || this.#$component.has(target).length !== 0;
  }
}

export default DropdownDatepicker;