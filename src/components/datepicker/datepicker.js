import ControlPanel from "../control-panel/control-panel";

import AirDatepicker from "air-datepicker";

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

  static parseDate(date) {
    const day = date.getDate();
    const month = date.getMonth();
    return `${day} ${Datepicker.#MONTHS[month]}`;
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
    return {
      start: this.#dateStart,
      end: this.#dateEnd,
    };
  }

  #init($parent, options) {
    this.#$component = $parent.find(`.js-${this.#className}`);
    this.#$input = this.#$component.find(`.js-${this.#className}__input`);

    this.#initDates();

    this.#controlPanel = new ControlPanel(this.#$component, {
      handleResetButtonClick: this.#handleResetButtonClick?.bind(this),
      handleApplyButtonClick: this.#handleApplyButtonClick?.bind(this),
    });

    this.#options = options;

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
    const start = this.#$component.data("startDate");
    const end = this.#$component.data("endDate");

    if (start) {
      this.#dates.push(start);
      this.#dateStart = new Date(start);
    }

    if (end) {
      this.#dates.push(end);
      this.#dateEnd = new Date(end);
    }
  }

  #initAirDatepicker() {
    const input = this.#$input.get(0);
    this.#airDatepicker = new AirDatepicker(input, {
      inline: true,
      visible: false,
      range: true,
      multipleDates: true,
      selectedDates: this.#dates,
      prevHtml: "<span class=\"material-icons\"> arrow_back </span>",
      nextHtml: "<span class=\"material-icons\"> arrow_forward </span>",
      navTitles: {
        days: "MMMM yyyy"
      },
      minDate: new Date(),
      onSelect: this.#handleDatepickerClick.bind(this),
    });
  }

  #handleDatepickerClick({date, datepicker}) {
    if (date.length === 1) {
      Datepicker.fixFocusDisplay(datepicker)
    }

    this.#dateStart = date?.[0];
    this.#dateEnd = date?.[1];

    const { handleDatepickerClick } = this.#options;
    handleDatepickerClick?.({date});
  }
}

export default Datepicker;