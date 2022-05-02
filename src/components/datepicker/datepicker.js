import ControlPanel from "../control-panel/control-panel";

import AirDatepicker from "air-datepicker";

class Datepicker {

  static #MONTHS = ["янв", "фев", "мар", "апр", "мая", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"];

  #className = "datepicker";

  #$component;
  #$input;
  #airDatepicker;

  #controlPanel;
  #startDate;
  #endDate;

  constructor($parent) {
    this.#init($parent);
  }

  #init($parent) {
    this.#$component = $parent.find(`.js-${this.#className}`);
    this.#$input = this.#$component.find(`.js-${this.#className}__input`);

    this.#startDate = this.#$component.data("startDate");
    this.#endDate = this.#$component.data("endDate");

    this.#controlPanel = new ControlPanel(this.#$component, {
      handleResetButtonClick: this.#handleResetButtonClick.bind(this),
    });

    this.#initAirDatepicker();
  }

  #handleResetButtonClick() {
    this.#airDatepicker.clear();
  }

  #initAirDatepicker() {
    const input = this.#$input.get(0);

    this.#airDatepicker = new AirDatepicker(input, {
      inline: true,
      visible: false,
      range: true,
      multipleDates: true,
      selectedDates: [this.#startDate, this.#endDate],
      dateFormat: this.#parseDates.bind(this),
      prevHtml: "<span class=\"material-icons\"> arrow_back </span>",
      nextHtml: "<span class=\"material-icons\"> arrow_forward </span>",
      navTitles: {
        days: "MMMM yyyy"
      },
    });
  }

  #parseDates(dates) {
    return dates.map(this.#parseDate).join(" - ");
  }

  #parseDate(date) {
    const day = date.getDate();
    const month = date.getMonth();
    return `${day} ${Datepicker.#MONTHS[month]}`;
  }
}

export default Datepicker;