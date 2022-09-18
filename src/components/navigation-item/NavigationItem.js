class NavigationItem {
  #className = "navigation-item";
  #$component;
  #$header;

  constructor($parent) {
    this.#init($parent);
    this.#render();
  }

  #init($parent) {
    this.#$component = $parent.find(`.js-${this.#className}`);
    this.#$header = this.#$component.find(`.js-${this.#className}__header-wrapper`);
  }

  #render() {
    this.#setHandlers();
  }

  #setHandlers() {
    this.#$header.on("click.navigationItem", this.#handleNavigationItemClick.bind(this));
  }

  #handleNavigationItemClick() {
    this.#$component.toggleClass(`${this.#className}_opened`);
  }
}

export default NavigationItem;