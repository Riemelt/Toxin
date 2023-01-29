class RateButton {
  #className = 'rate-button';
  #$component;
  #$icons;

  constructor({
    $parent,
  }) {
    this.#init($parent);
    this.#render();
  }

  #init($parent) {
    this.#$component = $parent.find(`.js-${this.#className}`);
    this.#$icons = this.#$component.find(`.js-${this.#className}__icon`);
  }

  #render() {
    this.#setHandlers();
  }

  #setHandlers() {
    this.#$icons.on(
      'click.rate-button',
      this.#handleRateButtonClick.bind(this),
    );
  }

  #handleRateButtonClick(event) {
    const clickedIndex = this.#$icons.index(event.target);
    this.#$icons.each((index, element) => {
      const $element = $(element);

      if (index <= clickedIndex) {
        $element.addClass(`${this.#className}__icon_checked`);
        return;
      }

      $element.removeClass(`${this.#className}__icon_checked`);
    });
  }
}

export default RateButton;
