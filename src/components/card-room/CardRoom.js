import {
  $getElement,
} from '../../utilities/utilities';
import ImageSlider from '../image-slider';
import RoomLabel from '../room-label';
import RateButton from '../rate-button';

class CardRoom {
  #className = 'card-room';

  #$component;

  constructor({
    $parent,
    options = {},
  }) {
    this.#init($parent, options);
  }

  #init($parent, {
    roomLabel = {},
  }) {
    this.#$component = $parent.find(`.js-${this.#className}`);

    const $imageSlider = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'image-slider',
    });

    new ImageSlider({
      $parent: $imageSlider,
    });

    const $label = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'label',
    });

    new RoomLabel({
      $parent: $label,
      options: roomLabel,
    });

    const $rateButton = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'rating',
    });

    new RateButton({
      $parent: $rateButton,
    });
  }
}

export default CardRoom;
