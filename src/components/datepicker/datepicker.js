import AirDatepicker from "air-datepicker";

import ControlPanel from "../control-panel";

class Datepicker {

  static #MONTHS = ["янв", "фев", "мар", "апр", "мая", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"];

  #className = "datepicker";

  #$component;
  #$input;
  #airDatepicker;
  #options;

  #controlPanel;
  #dates = [];

  #dateStart;
  #dateEnd;

  constructor($parent, options = {}) {
    this.#init($parent, options);
  }

  static parseDate = {
    primary: Datepicker.parseDatePrimary,
    secondary: Datepicker.parseDateSecondary,
  }

  static parseDatePrimary(date) {
    const day = date.getDate();
    const month = date.getMonth();
    return `${day} ${Datepicker.#MONTHS[month]}`;
  }

  static parseDateSecondary(date) {
    return date.toLocaleDateString("ru-RU");
  }

  static fixFocusDisplay(datepicker) {
    const selector = ".air-datepicker-cell.-day-.-selected-";
    const $selectedCell = $(selector, datepicker.$datepicker);

    $selectedCell.addClass("-range-from-");
    $selectedCell.addClass("-range-to-");
  }

  toggle() {
    this.#$component.toggleClass(`${this.#className}_hidden`);
  }

  close() {
    this.#$component.addClass(`${this.#className}_hidden`);
  }

  getDates() {
    const dates = [];
    if (this.#dateStart) {
      dates.push(this.#dateStart)
    }

    if (this.#dateEnd) {
      dates.push(this.#dateEnd)
    }

    return dates;
  }

  #init($parent, options) {
    this.#options = options;
    this.#$component = $parent.find(`.js-${this.#className}`);
    this.#$input = this.#$component.find(`.js-${this.#className}__input`);

    this.#initDates();

    this.#controlPanel = new ControlPanel(this.#$component, {
      handleResetButtonClick: this.#handleResetButtonClick?.bind(this),
      handleApplyButtonClick: this.#handleApplyButtonClick?.bind(this),
    });

    this.#initAirDatepicker();
  }

  #handleResetButtonClick() {
    this.#airDatepicker.clear();

    const { handleResetButtonClick } = this.#options;
    handleResetButtonClick?.();
  }

  #handleApplyButtonClick() {
    const { handleApplyButtonClick } = this.#options;
    handleApplyButtonClick?.();
  }

  #initDates() {
    const { startDate, endDate } = this.#options;

    if (startDate) {
      const date = new Date(startDate);
      const startDateValidated = this.#validateDate(date);
      this.#dates.push(startDateValidated);
      this.#dateStart = startDateValidated;
    }

    if (endDate) {
      const date = new Date(endDate)
      const endDateValidated = this.#validateDate(date);
      this.#dates.push(endDateValidated);
      this.#dateEnd = endDateValidated;
    }
  }

  #validateDate(date) {
    const { minDate } = this.#options;
    const minDateFormatted = minDate ? new Date(minDate) : new Date();

    return date > minDateFormatted ? date : minDateFormatted;
  }

  #initAirDatepicker() {
    const {
      range = true,
      multipleDates = true,
      minDate = new Date(),
    } = this.#options;

    const input = this.#$input.get(0);

    this.#airDatepicker = new AirDatepicker(input, {
      inline: true,
      visible: false,
      range,
      minDate,
      multipleDates,
      selectedDates: this.#dates,
      prevHtml: "<span class=\"material-icons\"> arrow_back </span>",
      nextHtml: "<span class=\"material-icons\"> arrow_forward </span>",
      navTitles: {
        days: "MMMM yyyy"
      },
      onSelect: this.#handleDatepickerClick.bind(this),
    });
  }

  #handleDatepickerClick({ date, datepicker }) {
    if (date.length === 1) {
      Datepicker.fixFocusDisplay(datepicker)
    }

    const {
      handleDatepickerClick,
      multipleDates = true,
    } = this.#options;

    if (multipleDates) {
      this.#dateStart = date?.[0];
      this.#dateEnd = date?.[1];
    } else {
      this.#dateStart = date;
    }

    handleDatepickerClick?.({date});
  }
}

export default Datepicker;