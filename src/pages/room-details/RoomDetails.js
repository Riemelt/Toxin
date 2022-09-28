import ChartPie from "../../components/chart-pie";

import "../../components/container";

class RoomDetails {
  #className = "room-details";
  #$component;

  #data = {};

  constructor($element, data = {}) {
    this.#init($element, data);
    this.#render();
  }

  #init($element, data) {
    this.#data = data;
    this.#$component = $element;
    new ChartPie(this.#$component.find(`.js-${this.#className}__chart-reviews`), data.chartReviews);
  }

  #render() {
    this.#setHandlers();
  }

  #setHandlers() {
  }
}

export default RoomDetails;