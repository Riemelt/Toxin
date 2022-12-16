import {
  renderSlider,
} from '../../utilities/utilities.js';
import '../../components/container';
import CardRegistration from '../../components/card-registration';
import data from './data.json';

class Registration {
  #className = 'registration';
  #$component;

  #sliderImages;

  constructor($element, options = {}) {
    this.#init($element, options);
    this.#render();
  }

  #init($element, {
    cardRegistration = {},
  }) {
    this.#$component   = $element;
    this.#sliderImages = data.slider.images;

    const $cardRegistration = this.#$component.find(`.js-${this.#className}__card-registration`);
    new CardRegistration($cardRegistration, cardRegistration);
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

export default Registration;