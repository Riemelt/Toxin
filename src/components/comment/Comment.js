import {
  getTimePassed,
  $getElement,
} from '../../utilities/utilities.js';
import LikeButton from '../like-button';

class Comment {
  #className = 'comment';
  #options;

  #$component;
  #$date;

  constructor({
    $parent,
    options = {}
  }) {
    this.#init($parent, options);
  }

  #init($parent, options) {
    this.#options = options;
    this.#$component = $parent.find(`.js-${this.#className}`);
    
    this.#$date = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'date',
    });

    new LikeButton(this.#$component);

    this.#initDate();
  }

  #initDate() {
    const { date = '' } = this.#options;
    const timePassed = getTimePassed(date);

    this.#$date.html(timePassed);
  }
}

export default Comment;