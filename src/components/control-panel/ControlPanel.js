import {
  $getElement,
} from '../../utilities/utilities';
import '../button';

class ControlPanel {
  static APPLY = 'apply';
  static RESET = 'reset';

  #className = 'control-panel';

  #$component;
  #$applyButton;
  #$resetButton;

  #handleButtonClick = {};

  constructor({
    $parent,
    options = {},
  }) {
    this.#init($parent, options);
    this.#render();
  }

  hideResetButton() {
    this.#$resetButton.addClass(`${this.#className}__reset_hidden`);
  }

  showResetButton() {
    this.#$resetButton.removeClass(`${this.#className}__reset_hidden`);
  }

  #init($parent, {
    handleApplyButtonClick,
    handleResetButtonClick,
  }) {
    this.#$component = $parent.find(`.js-${this.#className}`);

    this.#$applyButton = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'apply',
    });

    this.#$resetButton = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'reset',
    });

    this.#handleButtonClick[ControlPanel.APPLY] = handleApplyButtonClick;
    this.#handleButtonClick[ControlPanel.RESET] = handleResetButtonClick;
  }

  #render() {
    this.#setHandlers();
  }

  #setHandlers() {
    this.#$applyButton.on(
      'click.control-panel',
      this.#handleApplyButtonClick.bind(this),
    );

    this.#$resetButton.on(
      'click.control-panel',
      this.#handleResetButtonClick.bind(this),
    );
  }

  #handleApplyButtonClick() {
    this.#handleButtonClick[ControlPanel.APPLY]?.();
  }

  #handleResetButtonClick() {
    this.#handleButtonClick[ControlPanel.RESET]?.();
  }
}

export default ControlPanel;
