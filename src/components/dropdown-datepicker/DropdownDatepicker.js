import {
  daysDifference,
  $getElement,
} from '../../utilities/utilities';
import Datepicker from '../datepicker';
import InputField from '../input-field';

class DropdownDatepicker {
  #className = 'dropdown-datepicker';

  #$component;
  #options;
  #$inputWrapper;
  #datepicker;
  #inputs = [];

  #inputMode = DropdownDatepicker.#SINGLE_INPUT;
  #dateFormat = DropdownDatepicker.#DATE_FORMAT_PRIMARY;

  static #DATE_FORMAT_PRIMARY = 'primary';
  static #DATE_FORMAT_SECONDARY = 'secondary';

  static #SINGLE_INPUT = 'single';
  static #MULTIPLE_INPUT = 'multiple';

  static #PLACEHOLDER = 'ДД.ММ.ГГГГ';

  static #dateParser = {
    [DropdownDatepicker.#DATE_FORMAT_PRIMARY]: Datepicker.parseDate.primary,
    [DropdownDatepicker.#DATE_FORMAT_SECONDARY]: Datepicker.parseDate.secondary,
  };

  constructor({
    $parent,
    options = {},
  }) {
    this.#init($parent, options);
    this.#render();
  }

  getDaysOfStay() {
    const [dateStart, dateEnd] = this.#datepicker.getDates();
    return daysDifference(dateStart, dateEnd);
  }

  #init($parent, options) {
    this.#options = options;
    this.#$component = $parent.find(`.js-${this.#className}`);

    this.#$inputWrapper = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'input-wrapper',
    });

    const {
      withTwoInputs = false,
      dateFormat = DropdownDatepicker.#DATE_FORMAT_PRIMARY,
      datepicker = {},
    } = this.#options;

    this.#dateFormat = dateFormat;

    if (withTwoInputs) {
      this.#inputMode = DropdownDatepicker.#MULTIPLE_INPUT;
    }

    this.#datepicker = new Datepicker({
      $parent: this.#$component,
      options: {
        handleApplyButtonClick: this.#handleApplyButtonClick.bind(this),
        handleResetButtonClick: this.#handleResetButtonClick.bind(this),
        handleDatepickerClick: this.#handleDatepickerClick.bind(this),
        ...datepicker,
      },
    });

    this.#initInputs();
  }

  #initInputs() {
    if (this.#inputMode === DropdownDatepicker.#MULTIPLE_INPUT) {
      const $inputStart = $getElement({
        $parent: this.#$component,
        component: this.#className,
        element: 'input-start',
      });

      const $inputEnd = $getElement({
        $parent: this.#$component,
        component: this.#className,
        element: 'input-end',
      });

      this.#inputs.push(
        new InputField({
          $parent: $inputStart,
        }),
        new InputField({
          $parent: $inputEnd,
        }),
      );
    } else {
      const $inputSingle = $getElement({
        $parent: this.#$component,
        component: this.#className,
        element: 'input-single',
      });

      this.#inputs.push(new InputField({
        $parent: $inputSingle,
      }));
    }
  }

  #render() {
    this.#setHandlers();
  }

  #setHandlers() {
    jQuery(this.#handleInputInit.bind(this));

    $(document).on(
      'click.dropdown-datepicker',
      this.#handleDocumentClick.bind(this),
    );

    this.#$inputWrapper.on(
      'click.dropdown-datepicker',
      this.#handleInputWrapperClick.bind(this),
    );
  }

  #handleInputWrapperClick() {
    this.#datepicker.toggle();
  }

  #handleDocumentClick(event) {
    if (!this.#isDropdown(event.target)) {
      this.#datepicker.close();
    }
  }

  #handleInputInit() {
    this.#updateDropdownDatepicker();
  }

  #updateDropdownDatepicker() {
    const dates = this.#datepicker.getDates();
    const parser = DropdownDatepicker.#dateParser[this.#dateFormat];

    let start = DropdownDatepicker.#PLACEHOLDER;
    let end = DropdownDatepicker.#PLACEHOLDER;

    switch (dates.length) {
      case 1:
        end = parser(dates[0]);
        break;
      case 2:
        start = parser(dates[0]);
        end = parser(dates[1]);
        break;
      default:
        break;
    }

    this.#updateInputs({ start, end }, this.#inputMode);
  }

  #updateInputs(datesText, mode) {
    const { multipleDates = true } = this.#options.datepicker;

    if (mode === DropdownDatepicker.#SINGLE_INPUT) {
      let text = datesText.start;

      if (multipleDates) {
        text = `${text} - ${datesText.end}`;
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
    this.#inputs.forEach((input) => {
      input.setInputText(DropdownDatepicker.#PLACEHOLDER);
    });
  }

  #handleDatepickerClick() {
    this.#updateDropdownDatepicker();
  }

  #isDropdown(target) {
    const isDropdown = this.#$component.is(target);
    const isInsideDropdown = this.#$component.has(target).length !== 0;
    return isDropdown || isInsideDropdown;
  }
}

export default DropdownDatepicker;
