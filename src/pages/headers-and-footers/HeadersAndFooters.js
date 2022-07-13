import data from "./data.json";

import "../../components/container";
import "../../components/header-ui-kit";
import "../../components/header";

class HeadersAndFooters {
  #className = "headers-and-footers";
  #$component;

  constructor($element) {
    this.#init($element);
  }

  #init($element) {
    this.#$component = $element;
  }
}

export default HeadersAndFooters;