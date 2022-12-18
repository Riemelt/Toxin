import Header from '../../components/header';
import '../../components/footer';
import {
  $getElement,
} from '../../utilities/utilities';

class Layout {
  #className = 'layout';
  #$component;

  constructor({
    $element,
    options = {},
  }) {
    this.#init($element, options);
  }

  #init($element, {
    header = {},
  }) {
    this.#$component = $element;

    const $header = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'header',
    });

    new Header({
      $parent: $header,
      options: header,
    });
  }
}

export default Layout;