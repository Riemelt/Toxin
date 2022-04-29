import InputField from "../input-field/input-field.js";
import ControlPanel from "../control-panel/control-panel.js";
import CounterItem from "../counter-item/counter-item.js";

import { declOfNum } from "../../scripts/functions.js";

class DropdownCounter {
  #className = "dropdown-counter";

  #$component;
  #$menu;
  #$counterItems;

  #inputField;
  #controlPanel;
  #dropdownType;
  #counterItems = [];
  #itemList;

  static #PLACEHOLDERS = {
    guest: "Сколько гостей",
    room: "Сколько комнат",
  }

  static #DICTIONARY = {
    guest: {
      guest: ["гость", "гостя", "гостей"],
      baby: ["младенец", "младенца", "младенцев"],
    },
    room: {
      room: ["спальня", "спальни", "спален"],
      bathroom: ["ванная комната", "ванные комнаты", "ванных комнат"],
      bed: ["кровать", "кровати", "кроватей"],
    },
  }

  constructor($parent) {
    this.#init($parent);
    this.#render();
  }

  #init($parent) {
    this.#$component = $parent.find(`.js-${this.#className}`);

    this.#$menu = this.#$component.find(`.js-${this.#className}__menu`);
    this.#$counterItems = this.#$component.find(`.js-${this.#className}__item`);
    this.#$counterItems.each(this.#initCounterItem.bind(this));

    this.#dropdownType = this.#$component.data("type");
    this.#itemList = this.#initItemList(this.#dropdownType);
    this.#inputField = new InputField(this.#$component);
    this.#controlPanel = new ControlPanel(this.#$component, {
      handleApplyButtonClick: this.#handleApplyButtonClick.bind(this),
      handleResetButtonClick: this.#handleResetButtonClick.bind(this),
    });
  }

  #setHandlers() {
    jQuery(this.#handleInputInit.bind(this));
    $(document).on("click.dropdown", this.#handleDocumentClick.bind(this));
    this.#$component.on("click.dropdown", this.#handleDropdownClick.bind(this));
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
    if (!this.#isMenu(e.target))
      this.#toggleDropdown();
  }

  #handleCounterItemClick(addedValue, type) {
    this.#itemList[type] += addedValue;
    this.#updateInput();
    this.#updateControlPanel();
  }

  #handleDocumentClick(e) {
    if (!this.#isDropdown(e.target))
      this.#closeDropdown();
  }

  #handleApplyButtonClick() {
    this.#closeDropdown();
  }

  #handleResetButtonClick() {
    this.#resetCounterItems();
  }

  #handleInputInit() {
    this.#counterItems.forEach(this.#renderCounterValue.bind(this));
    this.#updateInput();
    this.#updateControlPanel();
  }

  #updateInput() {
    const text = this.#buildString(this.#itemList, this.#dropdownType);
    this.#inputField.setInputText(text);
  }

  #updateControlPanel() {
    console.log(this.#isItemListEmpty());
    if (this.#isItemListEmpty())
      this.#controlPanel.hideResetButton();
    else
      this.#controlPanel.showResetButton();
  }

  #resetCounterItems() {
    this.#counterItems.forEach(this.#resetCounterValue.bind(this));
    this.#itemList = this.#initItemList(this.#dropdownType);
    this.#updateInput();
    this.#updateControlPanel();
  }

  #resetCounterValue(element) {
    element.setValue(0);
  }

  #renderCounterValue(element) {
    const value = element.getValue();
    const type = element.getType();
    this.#itemList[type] += value;
  }

  #initCounterItem(_, element) {
    const $counterItem = $(element);
    this.#counterItems.push(
      new CounterItem($counterItem, {
        handleCounterItemClick: this.#handleCounterItemClick.bind(this),
      })
    );
  }

  #isMenu(target) {
    return this.#$menu.is(target) || this.#$menu.has(target).length !== 0;
  }

  #isDropdown(target) {
    return this.#$component.is(target) || this.#$component.has(target).length !== 0;
  }

  #buildString(itemList, type) {
    let text = "";
    const dictionaryMap = DropdownCounter.#DICTIONARY[type];
  
    Object.keys(itemList).forEach(function(item) {
      const itemCount = itemList[item];
      if (itemCount > 0) {
        if (text !== "")
          text += ", ";
        text += itemCount + " " + declOfNum(itemCount, dictionaryMap[item]);
      }
    });

    if (text === "")
      text = DropdownCounter.#PLACEHOLDERS[type];
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

  #isItemListEmpty() {
    let isEmpty = true;
    Object.values(this.#itemList).forEach(val => {
      if (val !== 0)
        isEmpty = false;
    });
    return isEmpty;
  }
}

export default DropdownCounter;