import "../../components/container";
import "../../components/footer";
import "../../components/header";
import "../../components/header-ui-kit";

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