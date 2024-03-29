import {
  $getElement,
} from '../../utilities/utilities';

class CounterItem {
  static #DECREMENT = -1;
  static #INCREMENT = 1;

  static #MIN = 0;
  static #MAX = 999;

  #className = 'counter-item';

  #$component;
  #type;

  #$decrement;
  #$increment;
  #$counterValue;

  #handleCounterItemClick;

  constructor({
    $parent,
    options = {},
  }) {
    this.#init($parent, options);
    this.#render();
  }

  getType() {
    return this.#type;
  }

  getValue() {
    return Number(this.#$counterValue.html());
  }

  setValue(value) {
    const newValue = this.#valueValidation(value);
    this.#$counterValue.html(newValue);
  }

  #init($parent, {
    handleCounterItemClick,
    type = 'guest',
    value = 0,
  }) {
    this.#$component = $parent.find(`.js-${this.#className}`);

    this.#$decrement = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'decrement',
    });

    this.#$increment = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'increment',
    });

    this.#$counterValue = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'value',
    });

    this.#type = type;
    this.setValue(value);

    this.#handleCounterItemClick = handleCounterItemClick;
  }

  #render() {
    this.#setHandlers();
  }

  #setHandlers() {
    this.#$decrement.on(
      'click.counter-item',
      this.#handleDecrementClick.bind(this),
    );

    this.#$increment.on(
      'click.counter-item',
      this.#handleIncrementClick.bind(this),
    );
  }

  #handleDecrementClick() {
    this.#handleCounterClick(CounterItem.#DECREMENT);
  }

  #handleIncrementClick() {
    this.#handleCounterClick(CounterItem.#INCREMENT);
  }

  #handleCounterClick(addedValue) {
    const value = this.getValue();
    this.setValue(value + addedValue);
    this.#handleCounterItemClick?.(addedValue, this.#type);
  }

  #valueValidation(value) {
    if (value <= CounterItem.#MIN) {
      this.#$decrement.prop('disabled', true);
      return CounterItem.#MIN;
    }

    if (value >= CounterItem.#MAX) {
      this.#$increment.prop('disabled', true);
      return CounterItem.#MAX;
    }

    this.#$decrement.prop('disabled', false);
    this.#$increment.prop('disabled', false);

    return value;
  }
}

export default CounterItem;
