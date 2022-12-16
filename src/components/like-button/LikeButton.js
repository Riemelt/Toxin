class LikeButton {
  #className = 'like-button';

  #$component;
  #$likes;

  #likes;
  #isChecked;

  constructor($parent) {
    this.#init($parent);
    this.#render();
  }

  #init($parent) {
    this.#$component = $parent.find(`.js-${this.#className}`);
    this.#$likes     = this.#$component.find(`.js-${this.#className}__likes`);
    this.#likes      = Number(this.#$likes.html());
    this.#isChecked  = this.#$component.hasClass(`${this.#className}_checked`);
  }

  #render() {
    this.#setHandlers();
  }

  #setHandlers() {
    this.#$component.on('click.like-button', this.#handleLikeButtonClick.bind(this));
  }

  #handleLikeButtonClick(event) {
    event.preventDefault();
    this.#$component.toggleClass(`${this.#className}_checked`);

    if (this.#isChecked) {
      this.#likes--;
      this.#isChecked = false;
    } else {
      this.#likes++;
      this.#isChecked = true;
    }

    this.#$likes.html(this.#likes);
  }
}

export default LikeButton;