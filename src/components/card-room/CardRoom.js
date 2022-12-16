import RoomLabel from '../room-label';

import '../rate-button';

class CardRoom {
  #className = 'card-room';

  #$component;

  #$images;
  #$nextButton;
  #$previousButton;
  #$controlButtons;

  #images         = [];
  #activeImageId  = 0;
  #controlButtons = [];

  static #NEXT     = 1;
  static #PREVIOUS = -1;

  constructor($parent, options) {
    this.#init($parent, options);
    this.#render();
  }

  #init($parent, options) {
    this.#$component      = $parent.find(`.js-${this.#className}`);
    this.#$images         = this.#$component.find(`.js-${this.#className}__slider-image`);
    this.#$nextButton     = this.#$component.find(`.js-${this.#className}__next`);
    this.#$previousButton = this.#$component.find(`.js-${this.#className}__previous`);
    this.#$controlButtons = this.#$component.find(`.js-${this.#className}__control-panel-button`);
    
    this.#$controlButtons.each((_, element) => this.#controlButtons.push($(element)));

    this.#$images.each(this.#initImage.bind(this));

    const { roomLabel = {} } = options;
    new RoomLabel(this.#$component.find(`.js-${this.#className}__label`), roomLabel);
  }

  #render() {
    this.#setHandlers();
  }

  #setHandlers() {
    this.#$previousButton.on('click.cardRoom', this.#handlePreviousButtonClick.bind(this));
    this.#$nextButton.on('click.cardRoom', this.#handleNextButtonClick.bind(this));
    this.#$controlButtons.on('click.cardRoom', this.#handleControlButtonsClick.bind(this));
  }

  #handleControlButtonsClick(event) {
    event.preventDefault();
    
    const $this = $(event.target);
    const id    = $this.data('id');

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
    this.#controlButtons[this.#activeImageId].removeClass(`${this.#className}__control-panel-button_active`);
    this.#controlButtons[newActiveImageId].addClass(`${this.#className}__control-panel-button_active`);
  }

  #initImage(index, element) {
    const $element = $(element);

    if ($element.hasClass(`${this.#className}__slider-image_active`)) {
      this.#activeImageId = index;
    }

    this.#images.push($element);
  }

  #updateImage(newActiveImageId) {
    this.#images[this.#activeImageId].removeClass(`${this.#className}__slider-image_active`);
    this.#images[newActiveImageId].addClass(`${this.#className}__slider-image_active`);
  }

  #getNewActiveImageId(direction = CardRoom.#NEXT) {
    return (this.#activeImageId + direction < 0) ? this.#images.length - 1 : (this.#activeImageId + direction) % this.#images.length;
  }

  #setNewActiveImageId(id) {
    this.#activeImageId = id;
  }
}

export default CardRoom;