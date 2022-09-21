import noUiSlider from "nouislider";

import { formatPrice } from "../../utilities/utilities.js";

import Label from "../label";

class RangeSlider {
  #className = "range-slider";
  #options;

  #$component;
  #$slider;
  #$label;

  #slider;
  #label;

  constructor($parent, options) {
    this.#init($parent, options);
    this.#render();
  }

  static buildRangeString(priceFrom, priceTo) {
    return `${formatPrice(priceFrom)} - ${formatPrice(priceTo)}`;
  }

  #init($parent, options) {
    this.#$component = $parent.find(`.js-${this.#className}`);
    this.#options = options;

    this.#$slider = this.#$component.find(`.js-${this.#className}__slider`);
    this.#slider = this.#$slider.get(0);

    this.#$label = this.#$component.find(`.js-${this.#className}__label`);
    this.#label = new Label(this.#$label);

    this.#initRangeSlider();
  }

  #render() {
    this.#setHandlers();
  }

  #setHandlers() {
    this.#slider.noUiSlider.on("update.range-slider", this.#handleRangeSliderUpdate.bind(this));
  }

  #handleRangeSliderUpdate(values) {
    const range = RangeSlider.buildRangeString(Number(values[0]), Number(values[1]));
    this.#label.setDescription(range);
  }

  #initRangeSlider() {
    const { start = [5000, 10000],
            range = {
              min: 0,
              max: 16000
            },
            step = 1000
    } = this.#options;

    noUiSlider.create(this.#slider, {
      start,
      range,
      step,
      connect: true,
    });
  }
}

export default RangeSlider;