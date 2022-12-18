import '../../components/container';
import '../../components/footer';
import '../../components/header-ui-kit';
import Header from '../../components/header';
import {
  $getElement,
} from '../../utilities/utilities';

class HeadersAndFooters {
  #className = 'headers-and-footers';
  #$component;

  constructor({
    $element,
    options = {},
  }) {
    this.#init($element, options);
  }

  #init($element, {
    headerDefault = {},
    headerSignedIn = {},
  }) {
    this.#$component = $element;

    const $headerDefault = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'header-default',
    });

    new Header({
      $parent: $headerDefault,
      options: headerDefault,
    });

    const $headerSignedIn = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'header-signed-in',
    });

    new Header({
      $parent: $headerSignedIn,
      options: headerSignedIn,
    });
  }
}

export default HeadersAndFooters;
