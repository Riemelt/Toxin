import { renderSlider } from "../../utilities/utilities.js";

import CardSearch from "../../components/card-search";

import "../../components/container";

import data from "./data.json";

class Landing {
  #className = "landing";
  #$component;

  #sliderImages;

  constructor($element) {
    this.#init($element);
  }

  #init($element) {
    this.#$component = $element;
    this.#sliderImages = data.slider.images;
    new CardSearch(this.#$component.find(`.js-${this.#className}__card-search`), data.cardSearch);
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