import {
  $getElement,
} from '../../utilities/utilities';

class ImageSlider {
  #className = 'image-slider';

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

  #init($parent) {
    this.#$component = $parent.find(`.js-${this.#className}`);
    this.#$images = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'image',
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
    const newActiveImageId = this.#getNewActiveImageId(ImageSlider.#PREVIOUS);
    this.#update(newActiveImageId);
  }

  #handleNextButtonClick(event) {
    event.preventDefault();
    const newActiveImageId = this.#getNewActiveImageId(ImageSlider.#NEXT);
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

    if ($element.hasClass(`${this.#className}__image_active`)) {
      this.#activeImageId = index;
    }

    this.#images.push($element);
  }

  #updateImage(newActiveImageId) {
    const active = `${this.#className}__image_active`;
    this.#images[this.#activeImageId].removeClass(active);
    this.#images[newActiveImageId].addClass(active);
  }

  #getNewActiveImageId(direction = ImageSlider.#NEXT) {
    return (this.#activeImageId + direction < 0) ?
      this.#images.length - 1 :
      (this.#activeImageId + direction) % this.#images.length;
  }

  #setNewActiveImageId(id) {
    this.#activeImageId = id;
  }
}

export default ImageSlider;
