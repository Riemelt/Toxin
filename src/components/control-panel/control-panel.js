class ControlPanel {

  static APPLY = "apply";
  static RESET = "reset";

  #className = "control-panel";

  #$component;
  #$applyButton;
  #$resetButton;

  #handleButtonClick;

  constructor($parent, options) {
    this.#init($parent, options);
    this.#render();
  }

  #init($parent, options) {
    this.#$component = $parent.find(`.js-${this.#className}`);
    this.#$applyButton = this.#$component.find(`.js-${this.#className}__apply`);
    this.#$resetButton = this.#$component.find(`.js-${this.#className}__reset`);

    const { handleButtonClick } = options;
    this.#handleButtonClick = handleButtonClick;
  }

  #render() {
    this.#setHandlers();
  }

  #setHandlers() {
    this.#$applyButton.on("click.control-panel", this.#handleApplyButtonClick.bind(this));
    this.#$resetButton.on("click.control-panel", this.#handleResetButtonClick.bind(this));
  }

  #handleApplyButtonClick() {
    this.#handleButtonClick(ControlPanel.APPLY);
  }

  #handleResetButtonClick() {
    this.#handleButtonClick(ControlPanel.RESET);
  }
}

export default ControlPanel;