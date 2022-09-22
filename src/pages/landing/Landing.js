import { renderSlider } from "../../utilities/utilities.js";

import CardSearch from "../../components/card-search";

import "../../components/container";

class Landing {
  #className = "landing";
  #$component;

  #data = {};
  #sliderImages;

  constructor($element, data = {}) {
    this.#init($element, data);
  }

  #init($element, data) {
    this.#data = data;
    this.#$component = $element;

    this.#sliderImages = this.#data.slider.images;
    new CardSearch(this.#$component.find(`.js-${this.#className}__card-search`), this.#data.cardSearch);
    this.#render();
  }

  #render() {
    this.#setHandlers();
  }

  #setHandlers() {
    //jQuery(this.#handleSlider.bind(this));
  }

  #handleSlider() {
    const options = {
      images: this.#sliderImages,
      delay: 4000,
      $component: this.#$component,
    };

    renderSlider(options);
  }
}

export default Landing;