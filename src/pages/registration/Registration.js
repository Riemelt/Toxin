import {
  renderSlider,
  $getElement,
} from '../../utilities/utilities.js';
import '../../components/container';
import CardRegistration from '../../components/card-registration';

class Registration {
  #className = 'registration';
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
    cardRegistration = {},
  }) {
    this.#$component = $element;
    this.#sliderImages = slider.images;

    const $cardRegistration = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'card-registration',
    });

    new CardRegistration({
      $parent: $cardRegistration,
      options: cardRegistration,
    });
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
