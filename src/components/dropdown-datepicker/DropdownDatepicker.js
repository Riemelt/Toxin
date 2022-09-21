import { daysDifference } from "../../utilities/utilities";

import Datepicker from "../datepicker";
import InputField from "../input-field";

class DropdownDatepicker {

  #className = "dropdown-datepicker";

  #$component;
  #options;
  #$inputWrapper;
  #inputs = [];
  #datepicker;

  #inputMode = DropdownDatepicker.#SINGLE_INPUT;
  #dateFormat = DropdownDatepicker.#DATE_FORMAT_PRIMARY;

  static #DATE_FORMAT_PRIMARY = "primary";
  static #DATE_FORMAT_SECONDARY = "secondary";

  static #SINGLE_INPUT = "single";
  static #MULTIPLE_INPUT = "multiple";

  static #PLACEHOLDER = "ДД.ММ.ГГГГ";

  constructor($parent, options = {}) {
    this.#init($parent, options);
    this.#render();
  }

  getDaysOfStay() {
    const [ dateStart, dateEnd ] = this.#datepicker.getDates();
    return daysDifference(dateStart, dateEnd);
  }

  #init($parent, options) {
    this.#options = options;
    this.#$component = $parent.find(`.js-${this.#className}`);
    this.#$inputWrapper = this.#$component.find(`.js-${this.#className}__input-wrapper`);

    const {
      withTwoInputs = false,
      dateFormat = DropdownDatepicker.#DATE_FORMAT_PRIMARY,
      datepicker = {},
    } = this.#options;

    this.#dateFormat = dateFormat;

    if (withTwoInputs) {
      this.#inputMode = DropdownDatepicker.#MULTIPLE_INPUT;
    }

    this.#datepicker = new Datepicker(this.#$component, {
      handleApplyButtonClick: this.#handleApplyButtonClick.bind(this),
      handleResetButtonClick: this.#handleResetButtonClick.bind(this),
      handleDatepickerClick: this.#handleDatepickerClick.bind(this),
      ...datepicker,
    });

    this.#initInputs();
  }

  #initInputs() {
    if (this.#inputMode === DropdownDatepicker.#MULTIPLE_INPUT) {
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
    const [ dateStart, dateEnd ] = this.#datepicker.getDates();
    const parser = this.#dateFormat === DropdownDatepicker.#DATE_FORMAT_PRIMARY ? Datepicker.parseDate.primary : Datepicker.parseDate.secondary;

    const start = dateStart ? parser(dateStart) : DropdownDatepicker.#PLACEHOLDER;
    const end = dateEnd ? parser(dateEnd) : DropdownDatepicker.#PLACEHOLDER;

    this.#updateInputs({ start, end }, this.#inputMode);
  }

  #updateInputs(datesText, mode) {
    const { multipleDates = true } = this.#options.datepicker;

    if (mode === DropdownDatepicker.#SINGLE_INPUT) {
      let text = datesText.start;
      if (multipleDates) {
        text = `${text} - ${datesText.end}`
      }
      this.#inputs[0].setInputText(text);
    } else if (mode === DropdownDatepicker.#MULTIPLE_INPUT) {
      this.#inputs[0].setInputText(datesText.start);
      this.#inputs[1].setInputText(datesText.end);
    }
  }

  #handleApplyButtonClick() {
    const { handleApplyButtonClick } = this.#options;
    handleApplyButtonClick?.();
    
    this.#datepicker.close();
  }
  
  #handleResetButtonClick() {
    this.#inputs.forEach(input => input.setInputText(DropdownDatepicker.#PLACEHOLDER));
  }

  #handleDatepickerClick() {
    this.#updateDropdownDatepicker();
  }

  #isDropdown(target) {
    return this.#$component.is(target) || this.#$component.has(target).length !== 0;
  }
}

export default DropdownDatepicker;