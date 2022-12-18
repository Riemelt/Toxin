import {
  $getElement,
  declOfNum,
} from '../../utilities/utilities.js';

import ControlPanel from '../control-panel';
import CounterItem  from '../counter-item';
import InputField   from '../input-field';

class DropdownCounter {
  #className = 'dropdown-counter';
  #options;

  #$component;
  #$menu;
  #$counterItems;
  #$controlPanel;

  #inputField;
  #controlPanel;
  #dropdownType;
  #itemList;
  #counterItems = [];

  static #PLACEHOLDERS = {
    guest: 'Сколько гостей',
    room:  'Сколько комнат',
  };

  static #DICTIONARY = {
    guest: {
      guest:    ['гость', 'гостя', 'гостей'],
      baby:     ['младенец', 'младенца', 'младенцев'],
    },
    room: {
      room:     ['спальня', 'спальни', 'спален'],
      bathroom: ['ванная комната', 'ванные комнаты', 'ванных комнат'],
      bed:      ['кровать', 'кровати', 'кроватей'],
    },
  };

  constructor({
    $parent,
    options = {}
  }) {
    this.#init($parent, options);
    this.#render();
  }

  #init($parent, options) {
    this.#$component = $parent.find(`.js-${this.#className}`);
    this.#options    = options;

    this.#$menu = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'menu',
    });

    this.#$counterItems = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'item',
    });

    this.#$counterItems.each(this.#initCounterItem.bind(this));

    this.#$controlPanel = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'control-panel-wrapper',
    });

    const {
      type     = 'guest',
      isOpened = false,
    } = this.#options;

    this.#dropdownType = type;

    this.#itemList   = this.#initItemList(this.#dropdownType);
    this.#inputField = new InputField({
      $parent: this.#$component,
    });

    if (this.#$controlPanel.length !== 0) {
      this.#controlPanel = new ControlPanel({
        $parent: this.#$component,
        options: {
          handleApplyButtonClick: this.#handleApplyButtonClick.bind(this),
          handleResetButtonClick: this.#handleResetButtonClick.bind(this),
        },
      });
    }

    if (isOpened) {
      this.#toggleDropdown();
    }
  }

  #setHandlers() {
    jQuery(this.#handleInputInit.bind(this));
    $(document).on('click.dropdown', this.#handleDocumentClick.bind(this));
    this.#$component.on('click.dropdown', this.#handleDropdownClick.bind(this));
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

  #handleDropdownClick(event) {
    event.preventDefault();

    if (!this.#isMenu(event.target)) {
      this.#toggleDropdown();
    }
  }

  #handleCounterItemClick(addedValue, type) {
    this.#itemList[type] += addedValue;
    this.#updateInput();
    this.#updateControlPanel();
  }

  #handleDocumentClick(event) {
    if (!this.#isDropdown(event.target))
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
    const type  = element.getType();
    this.#itemList[type] += value;
  }

  #initCounterItem(index, element) {
    const $counterItem = $(element);
    const { items = [] } = this.#options;
    
    this.#counterItems.push(
      new CounterItem({
        $parent: $counterItem,
        options: {
          handleCounterItemClick: this.#handleCounterItemClick.bind(this),
          ...items[index],
        },
      })
    );
  }

  #isMenu(target) {
    return this.#$menu.is(target) || this.#$menu.has(target).length !== 0;
  }

  #isDropdown(target) {
    const isDropdown = this.#$component.is(target);
    const isInsideDropdown = this.#$component.has(target).length !== 0;
    return isDropdown || isInsideDropdown;
  }

  #buildString() {
    let text            = '';
    const type          = this.#dropdownType;
    const dictionaryMap = DropdownCounter.#DICTIONARY[type];
  
    for (const item in this.#itemList) {
      const itemCount = this.#itemList[item];

      if (itemCount > 0) {
        text += text !== '' ? ', ' : '';
        text += itemCount + ' ' + declOfNum(itemCount, dictionaryMap[item]);
      }
    }

    if (text === '') {
      text = DropdownCounter.#PLACEHOLDERS[type];
    }

    return text;
  }

  #initItemList(type) {
    switch (type) {
      case 'guest':
        return { guest: 0, baby: 0 };
      case 'room':
        return { room: 0, bed: 0, bathroom: 0 };
      default:
        return {};
    }
  }

  #isItemListEmpty() {
    let isEmpty = true;

    for (const item in this.#itemList) {
      if (this.#itemList[item] !== 0) {
        isEmpty = false;
      }
    }

    return isEmpty;
  }
}

export default DropdownCounter;