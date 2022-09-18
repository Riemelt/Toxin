import data from "../../components/header/data.json";

import "../layout-base";
import "../../components/footer";

import Header from "../../components/header";

class Layout {
  #className = "layout";
  #$component;

  constructor($element) {
    this.#init($element);
  }

  #init($element) {
    this.#$component = $element;
    new Header(this.#$component.find(`.js-${this.#className}__header`), data);
  }
}

export default Layout;