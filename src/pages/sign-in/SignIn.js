import {
  renderSlider,
} from '../../utilities/utilities.js';
import '../../components/container';
import '../../components/card-sign-in';

class SignIn {
  #$component;
  #sliderImages;

  constructor({
    $element,
    options = {},
  }) {
    this.#init($element, options);
    this.#render();
  }

  #init($element, {
    slider = {},
  }) {
    this.#$component = $element;
    this.#sliderImages = slider.images;
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
