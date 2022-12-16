import '../../components/container';
import '../../components/footer';
import '../../components/header-ui-kit';
import Header from '../../components/header';

class HeadersAndFooters {
  #className = 'headers-and-footers';
  #$component;

  constructor($element, options = {}) {
    this.#init($element, options);
  }

  #init($element, {
    headerDefault  = {},
    headerSignedIn = {},
  }) {
    this.#$component = $element;
    new Header(this.#$component.find(`.js-${this.#className}__header-default`), headerDefault);
    new Header(this.#$component.find(`.js-${this.#className}__header-signed-in`), headerSignedIn);
  }
}

export default HeadersAndFooters;