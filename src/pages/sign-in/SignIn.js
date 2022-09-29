import { renderSlider } from "../../utilities/utilities.js";

import "../../components/container";
import "../../components/card-sign-in";

import data from "./data.json";

class SignIn {
  #className = "sign-in";
  #$component;

  #sliderImages;

  constructor($element) {
    this.#init($element);
    this.#render();
  }

  #init($element) {
    this.#$component = $element;

    this.#sliderImages = data.slider.images;
  }

  #render() {
    this.#setHandlers();
  }

  #setHandlers() {
    jQuery(this.#handleSlider.bind(this));
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

export default SignIn;