import {
  declOfNum,
  $getElement,
} from '../../utilities/utilities';

import Comment from '../comment';

class Comments {
  #className = 'comments';
  #options;

  #$component;
  #$comments;
  #$counter;

  static #DICTIONARY = [
    'отзыв',
    'отзыва',
    'отзывов',
  ];

  constructor({
    $parent,
    options = {},
  }) {
    this.#init($parent, options);
  }

  #init($parent, options) {
    this.#options = options;
    this.#$component = $parent.find(`.js-${this.#className}`);

    this.#$comments = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'comment',
    });

    this.#$comments.each(this.#initComment.bind(this));

    this.#$counter = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'counter',
    });

    this.#initCounter();
  }

  #initCounter() {
    const { comments = [] } = this.#options;

    const number = comments.length;
    const label = declOfNum(number, Comments.#DICTIONARY);
    const text = `${number} ${label}`;

    this.#$counter.html(text);
  }

  #initComment(index, element) {
    const $element = $(element);
    const options = this.#options.comments[index];

    new Comment({
      options,
      $parent: $element,
    });
  }
}

export default Comments;
