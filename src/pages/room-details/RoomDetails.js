import ChartPie from "../../components/chart-pie";
import CardReservation from "../../components/card-reservation";
import Comments from "../../components/comments";

import "../../components/container";
import "../../components/gallery";
import "../../components/room-info";
import "../../components/bullet-list";

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
    new Comments(this.#$component.find(`.js-${this.#className}__comments`), data.comments);
    new CardReservation(this.#$component.find(`.js-${this.#className}__card-reservation`), data.cardReservation);
    new ChartPie(this.#$component.find(`.js-${this.#className}__chart-reviews`), data.chartReviews);
  }

  #render() {
    this.#setHandlers();
  }

  #setHandlers() {
  }
}

export default RoomDetails;