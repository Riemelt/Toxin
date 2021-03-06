import "../label";

class Expander {
  #className = "expander";

  #$component;
  #$header;

  constructor($parent) {
    this.#init($parent);
    this.#render();
  }

  #init($parent) {
    this.#$component = $parent.find(`.js-${this.#className}`);
    this.#$header = this.#$component.find(`.js-${this.#className}__header`);
  }

  #render() {
    this.#setHandlers();
  }

  #setHandlers() {
    this.#$header.on("click.expander", this.#handleExpanderClick.bind(this));
  }

  #handleExpanderClick() {
    this.#$component.toggleClass(`${this.#className}_opened`);
  }
}

export default Expander;