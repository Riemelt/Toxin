import {
  $getElement,
} from '../../utilities/utilities';

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

    this.#$likes = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'likes',
    });

    this.#likes = Number(this.#$likes.html());
    this.#isChecked = this.#$component.hasClass(`${this.#className}_checked`);
  }

  #render() {
    this.#setHandlers();
  }

  #setHandlers() {
    this.#$component.on(
      'click.like-button',
      this.#handleLikeButtonClick.bind(this),
    );
  }

  #handleLikeButtonClick(event) {
    event.preventDefault();
    this.#$component.toggleClass(`${this.#className}_checked`);

    if (this.#isChecked) {
      this.#likes -= 1;
      this.#isChecked = false;
    } else {
      this.#likes += 1;
      this.#isChecked = true;
    }

    this.#$likes.html(this.#likes);
  }
}

export default LikeButton;
