import {
  renderSlider,
  $getElement,
} from '../../utilities/utilities.js';
import CardSearch from '../../components/card-search';
import '../../components/container';

class Landing {
  #className = 'landing';
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
    cardSearch = {},
  }) {
    this.#$component = $element;
    this.#sliderImages = slider.images;

    const $cardSearch = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'card-search',
    });

    new CardSearch({
      $parent: $cardSearch,
      options: cardSearch,
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

export default Landing;
