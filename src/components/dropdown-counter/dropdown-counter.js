import InputField from "../input-field/input-field.js";

class DropdownCounter {
  #className = "dropdown-counter";

  #increment = `js-${this.#className}__increment`;
  #decrement = `js-${this.#className}__decrement`;
  #counterValue = `js-${this.#className}__value`;

  #$component;
  #$menu;
  #$decrements;
  #$increments;
  #$counterValues;

  #inputField;
  #dropdownType;
  #itemList;

  static #MIN = 0;
  static #MAX = 999;

  static #DICTIONARY = {
    guest: {
      guest: "гость",
      baby: "младенец"
    },
    room: {
      room: "спальня",
      bathroom: "ванная комната",
      bed: "кровать"
    },
  }

  constructor($parent) {
    this.#init($parent);
    this.#render();
  }

  #init($parent) {
    this.#$component = $parent.find(`.js-${this.#className}`);
    this.#$menu = $parent.find(`.js-${this.#className}__menu`);
    this.#$decrements = $parent.find(`.js-${this.#className}__decrement`);
    this.#$increments = $parent.find(`.js-${this.#className}__increment`);
    this.#$counterValues = $parent.find(`.js-${this.#className}__value`);

    this.#dropdownType = this.#$component.data("type");
    this.#itemList = this.#initItemList(this.#dropdownType);

    this.#inputField = new InputField(this.#$component);
  }

  #setHandlers() {
    jQuery(this.#handleInputInit.bind(this));
    $(document).on("click.dropdown", this.#handleDocumentClick.bind(this));
    this.#$component.on("click.dropdown", this.#handleDropdownClick.bind(this));
    this.#$increments.on("click.dropdown", this.#handleIncrementClick.bind(this));
    this.#$decrements.on("click.dropdown", this.#handleDecrementClick.bind(this));
  }

  #render() {
    this.#setHandlers();
  }

  #closeDropdown() {
    this.#$component.removeClass(`${this.#className}_opened`);
    this.#inputField.closeExpand();
  }

  #toggleDropdown() {
    this.#$component.toggleClass(`${this.#className}_opened`);
    this.#inputField.toggleExpand();
  }

  #handleDropdownClick(e) {
    e.preventDefault();
    console.log("CLICL");
    if (!this.#isMenu(e.target))
      this.#toggleDropdown();
  }

  #handleIncrementClick(e) {
    const $increment = $(e.currentTarget);
    const $counterValue = $increment.parent().find(`.${this.#counterValue}`);
    const $decrement = $increment.parent().find(`.${this.#decrement}`);
  
    const value = $counterValue.html();
    const newValue = Number(value) + 1;

    this.#updateCounterItem({ $decrement, $counterValue, $increment, newValue });
  }

  #handleDecrementClick(e) {
    const $decrement = $(e.currentTarget);
    const $counterValue = $decrement.parent().find(`.${this.#counterValue}`);
    const $increment = $decrement.parent().find(`.${this.#increment}`);
  
    const value = $counterValue.html();
    const newValue = Number(value) - 1;

    this.#updateCounterItem({ $decrement, $counterValue, $increment, newValue });
  }

  #handleDocumentClick(e) {
    if (!this.#isDropdown(e.target))
      this.#closeDropdown();
  }

  #isMenu(target) {
    return this.#$menu.is(target) || this.#$menu.has(target).length !== 0;
  }

  #isDropdown(target) {
    return this.#$component.is(target) || this.#$component.has(target).length !== 0;
  }

  #handleInputInit() {
    this.#$counterValues.each(this.#renderCounterValue.bind(this));
    const text = this.#buildString(this.#itemList, this.#dropdownType);
    this.#inputField.setInputText(text);
  }

  #renderCounterValue(_, element) {
    const $value = $(element);
    const type = $value.data("type");
    const guestCount = $value.html();
    this.#itemList[type] += Number(guestCount);
  }

  #updateCounterItem(item) {
    const { $decrement, $counterValue, $increment } = item;
    let { newValue } = item;

    if (newValue <= DropdownCounter.#MIN) {
      newValue = DropdownCounter.#MIN;
      $decrement.prop("disabled", true);
    }
    else if (newValue >= DropdownCounter.#MAX) {
      newValue = DropdownCounter.#MAX;
      $increment.prop("disabled", true);
    }
    else {
      $decrement.prop("disabled", false);
      $increment.prop("disabled", false);
    }
    $counterValue.html(newValue);
  }

  #buildString(itemList, type) {
    let text = "";
    const dictionaryMap = DropdownCounter.#DICTIONARY[type];
  
    Object.keys(itemList).forEach(function(item) {
      if (itemList[item] > 0) {
        if (text !== "")
          text += ", ";
        text += itemList[item] + " " + dictionaryMap[item];
      }
    });
    return text;
  }

  #initItemList(type) {
    switch (type) {
      case "guest":
        return {guest: 0, baby: 0};
      case "room":
        return {room: 0, bed: 0, bathroom: 0};
      default:
        console.log("Wrong dropdown type")
        return {};
    }
  }
}

export default DropdownCounter;