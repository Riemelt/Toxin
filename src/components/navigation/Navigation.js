import {
  $getElement,
} from '../../utilities/utilities';
import NavigationItem from '../navigation-item';

class Navigation {
  #className = 'navigation';
  #$component;
  #options;

  #$navigationItems;
  #navigationItems = [];

  constructor({
    $parent,
    options = {},
  }) {
    this.#init($parent, options);
  }

  #init($parent, options) {
    this.#options = options;
    this.#$component = $parent.find(`.js-${this.#className}`);
    this.#$navigationItems = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'item',
    });

    this.#$navigationItems.each(this.#initNavigationItem.bind(this));
  }

  #initNavigationItem(index, element) {
    const $navigationItem = $(element);

    if (this.#options.items[index].subNavigation) {
      this.#navigationItems.push(new NavigationItem($navigationItem));
    }
  }
}

export default Navigation;
