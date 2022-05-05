class Expander {

  #className = "expander";

  #$component;
  #$header;

  constructor($parent) {
    this.#init($parent);
    this.#render();
  }

  #init($parent) {
    this.#$component = (`.js-${this.#className}`, $parent);
    this.#$header = this.#$component.find(`.js-${this.#className}__header`);
  }

  #render() {
    this.#setHandlers();
  }

  #setHandlers() {
    this.#$header.on("click.expander", this.#handleExpanderClick.bind(this));
  }

  #handleExpanderClick() {
    this.#$component.toggleClass(`${this.#className}__opened`);
  }
}

export default Expander;