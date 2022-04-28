import InputField from "../input-field/input-field";

import AirDatepicker from "air-datepicker";

class Datepicker {

  static #MONTHS = ["янв", "фев", "мар", "апр", "мая", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"];

  #className = "datepicker";

  #$component;
  #inputField;
  #airDatepicker;

  #startDate;
  #endDate;

  constructor($parent) {
    this.#init($parent);
  }

  #init($parent) {
    this.#$component = $parent.find(`.js-${this.#className}`);
    this.#inputField = new InputField(this.#$component);

    this.#startDate = this.#$component.data("startDate");
    this.#endDate = this.#$component.data("endDate");

    this.#initAirDatepicker();
    this.#airDatepicker.hide();

  }

  #initAirDatepicker() {
    const input = this.#inputField.getInput().get(0);

    this.#airDatepicker = new AirDatepicker(this.#$component.get(0), {
      visible: false,
      range: true,
      multipleDates: true,
      selectedDates: [this.#startDate, this.#endDate],
      dateFormat: this.#parseDates.bind(this),
      container: this.#$component.get(0),
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