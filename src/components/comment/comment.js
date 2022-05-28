import LikeButton from "../like-button/like-button.js";

import { getTimePassed } from "../../scripts/functions.js"

class Comment {
  #className = "comment";

  #$component;
  #$date;
  #likeButton;

  constructor($parent) {
    this.#init($parent);
  }

  #init($parent) {
    this.#$component = $parent.find(`.js-${this.#className}`);
    this.#$date = this.#$component.find(`.js-${this.#className}__date`);
    this.#likeButton = new LikeButton(this.#$component);

    this.#initDate();
  }

  #initDate() {
    const date = new Date(this.#$component.data("date"));
    const timePassed = getTimePassed(date);

    this.#$date.html(timePassed);
  }
}

export default Comment;