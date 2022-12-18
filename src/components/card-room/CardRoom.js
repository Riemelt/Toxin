import {
  $getElement,
} from '../../utilities/utilities';
import RoomLabel from '../room-label';
import '../rate-button';

class CardRoom {
  #className = 'card-room';

  #$component;

  #$images;
  #$nextButton;
  #$previousButton;
  #$controlButtons;

  #images = [];
  #activeImageId = 0;
  #controlButtons = [];

  static #NEXT = 1;
  static #PREVIOUS = -1;

  constructor({
    $parent,
    options = {},
  }) {
    this.#init($parent, options);
    this.#render();
  }

  #init($parent, {
    roomLabel = {},
  }) {
    this.#$component = $parent.find(`.js-${this.#className}`);
    this.#$images = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'slider-image',
    });

    this.#$nextButton = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'next',
    });

    this.#$previousButton = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'previous',
    });

    this.#$controlButtons = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'control-panel-button',
    });

    this.#$controlButtons.each((...args) => {
      const [, element] = args;
      this.#controlButtons.push($(element));
    });

    this.#$images.each(this.#initImage.bind(this));

    const $label = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'label',
    });

    new RoomLabel({
      $parent: $label,
      options: roomLabel,
    });
  }

  #render() {
    this.#setHandlers();
  }

  #setHandlers() {
    this.#$previousButton.on(
      'click.cardRoom',
      this.#handlePreviousButtonClick.bind(this),
    );

    this.#$nextButton.on(
      'click.cardRoom',
      this.#handleNextButtonClick.bind(this),
    );

    this.#$controlButtons.on(
      'click.cardRoom',
      this.#handleControlButtonsClick.bind(this),
    );
  }

  #handleControlButtonsClick(event) {
    event.preventDefault();

    const $this = $(event.target);
    const id = $this.data('id');

    if (id < this.#images.length) {
      this.#update(id);
    }
  }

  #handlePreviousButtonClick(event) {
    event.preventDefault();
    const newActiveImageId = this.#getNewActiveImageId(CardRoom.#PREVIOUS);
    this.#update(newActiveImageId);
  }

  #handleNextButtonClick(event) {
    event.preventDefault();
    const newActiveImageId = this.#getNewActiveImageId(CardRoom.#NEXT);
    this.#update(newActiveImageId);
  }

  #update(id) {
    this.#updateImage(id);
    this.#updateControlButton(id);
    this.#setNewActiveImageId(id);
  }

  #updateControlButton(newActiveImageId) {
    const active = `${this.#className}__control-panel-button_active`;
    this.#controlButtons[this.#activeImageId].removeClass(active);
    this.#controlButtons[newActiveImageId].addClass(active);
  }

  #initImage(index, element) {
    const $element = $(element);

    if ($element.hasClass(`${this.#className}__slider-image_active`)) {
      this.#activeImageId = index;
    }

    this.#images.push($element);
  }

  #updateImage(newActiveImageId) {
    const active = `${this.#className}__slider-image_active`;
    this.#images[this.#activeImageId].removeClass(active);
    this.#images[newActiveImageId].addClass(active);
  }

  #getNewActiveImageId(direction = CardRoom.#NEXT) {
    return (this.#activeImageId + direction < 0) ?
      this.#images.length - 1 :
      (this.#activeImageId + direction) % this.#images.length;
  }

  #setNewActiveImageId(id) {
    this.#activeImageId = id;
  }
}

export default CardRoom;
