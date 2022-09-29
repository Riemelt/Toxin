import { getTimePassed } from "../../utilities/utilities.js"

import LikeButton from "../like-button";

class Comment {
  #className = "comment";
  #options;

  #$component;
  #$date;
  #likeButton;

  constructor($parent, options = {}) {
    this.#init($parent, options);
  }

  #init($parent, options) {
    this.#options = options;
    this.#$component = $parent.find(`.js-${this.#className}`);
    this.#$date = this.#$component.find(`.js-${this.#className}__date`);
    this.#likeButton = new LikeButton(this.#$component);

    this.#initDate();
  }

  #initDate() {
    const { date = "" } = this.#options;
    const timePassed = getTimePassed(date);

    this.#$date.html(timePassed);
  }
}

export default Comment;