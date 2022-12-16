import Navigation from '../navigation';
import '../button';
import '../container';
import '../logo';

class Header {
  #className = 'header';

  #$component;
  #$menuButton;

  constructor($parent, options = {}) {
    this.#init($parent, options);
    this.#render();
  }

  #init($parent, {
    navigation = {},
  }) {
    this.#$component  = $parent.find(`.js-${this.#className}`);
    this.#$menuButton = this.#$component.find(`.js-${this.#className}__menu-button`);

    new Navigation(this.#$component, navigation);
  }

  #render() {
    this.#setHandlers();
  }

  #setHandlers() {
    this.#$menuButton.on('click.header', this.#handleMenuButtonClick.bind(this));
  }

  #handleMenuButtonClick() {
    this.#toggleMenu();
  }

  #toggleMenu() {
    this.#$component.toggleClass(`${this.#className}_opened`);
  }
}

export default Header;