import InputField from "../input-field";
import ControlPanel from "../control-panel";
import CounterItem from "../counter-item";

import { declOfNum } from "../../utilities/utilities.js";

class DropdownCounter {
  #className = "dropdown-counter";
  #options;

  #$component;
  #$menu;
  #$counterItems;
  #$controlPanel;

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

  constructor($parent, options) {
    this.#init($parent, options);
    this.#render();
  }

  #init($parent, options) {
    this.#$component = $parent.find(`.js-${this.#className}`);

    this.#options = options;

    this.#$menu = this.#$component.find(`.js-${this.#className}__menu`);
    this.#$counterItems = this.#$component.find(`.js-${this.#className}__item`);
    this.#$counterItems.each(this.#initCounterItem.bind(this));
    this.#$controlPanel = this.#$component.find(`.js-${this.#className}__control-panel-wrapper`);

    const {
      type = "guest",
      isOpened = false,
    } = this.#options;

    this.#dropdownType = type;

    this.#itemList = this.#initItemList(this.#dropdownType);
    this.#inputField = new InputField(this.#$component);

    if (this.#$controlPanel.length !== 0) {
      this.#controlPanel = new ControlPanel(this.#$component, {
        handleApplyButtonClick: this.#handleApplyButtonClick.bind(this),
        handleResetButtonClick: this.#handleResetButtonClick.bind(this),
      });
    }

    if (isOpened) {
      this.#toggleDropdown();
    }
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
    const text = this.#buildString();
    this.#inputField.setInputText(text);
  }

  #updateControlPanel() {
    if (this.#isItemListEmpty())
      this.#controlPanel?.hideResetButton();
    else
      this.#controlPanel?.showResetButton();
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

  #initCounterItem(index, element) {
    const $counterItem = $(element);
    const { items = [] } = this.#options;
    
    this.#counterItems.push(
      new CounterItem($counterItem, {
        handleCounterItemClick: this.#handleCounterItemClick.bind(this),
        ...items[index],
      })
    );
  }

  #isMenu(target) {
    return this.#$menu.is(target) || this.#$menu.has(target).length !== 0;
  }

  #isDropdown(target) {
    return this.#$component.is(target) || this.#$component.has(target).length !== 0;
  }

  #buildString() {
    let text = "";
    const type = this.#dropdownType;
    const dictionaryMap = DropdownCounter.#DICTIONARY[type];
  
    for (const item in this.#itemList) {
      const itemCount = this.#itemList[item];
      if (itemCount > 0) {
        if (text !== "")
          text += ", ";
        text += itemCount + " " + declOfNum(itemCount, dictionaryMap[item]);
      }
    }

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

    for (const item in this.#itemList) {
      if (this.#itemList[item] !== 0)
        isEmpty = false;
    }

    return isEmpty;
  }
}

export default DropdownCounter;