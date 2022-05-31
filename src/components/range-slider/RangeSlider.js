import noUiSlider from "nouislider";
import Label from "../label";

class RangeSlider {
  #className = "range-slider";

  #$component;
  #$slider;
  #$label;

  #slider;
  #label;

  constructor($parent) {
    this.#init($parent);
    this.#render();
  }

  static buildRangeString(priceFrom, priceTo) {
    return `${priceFrom.toLocaleString("ru-RU")}₽ - ${priceTo.toLocaleString("ru-RU")}₽`;
  }

  #init($parent) {
    this.#$component = $parent.find(`.js-${this.#className}`);

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
    noUiSlider.create(this.#slider, {
      start: [5000, 10000],
      connect: true,
      range: {
          min: 0,
          max: 16000
      },
      step: 1000,
    });
  }
}

export default RangeSlider;