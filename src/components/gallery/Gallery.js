import {
  $getElement,
} from '../../utilities/utilities';
import ImageSlider from '../image-slider';

class Gallery {
  #className = 'gallery';

  #$component;

  constructor({
    $parent,
  }) {
    this.#init($parent);
  }

  #init($parent) {
    this.#$component = $parent.find(`.js-${this.#className}`);

    const $imageSlider = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'image-slider',
    });

    new ImageSlider({
      $parent: $imageSlider,
    });
  }
}

export default Gallery;
