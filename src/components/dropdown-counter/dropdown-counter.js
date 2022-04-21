import { toggleExpand, closeExpand, setInputText } from "../input-field/input-field.js";

const classNameJs = "js-dropdown-counter";
const className = "dropdown-counter";
const classDropdownMenu = `js-${className}__menu`;

const classDecrement = `js-${className}__decrement`;
const classIncrement = `js-${className}__increment`;
const classValue = `js-${className}__value`;

const minValue = 0;
const maxValue = 999;

var $dropdowns = $(`.${classNameJs}`);

const dictionary = {
  guest: {
    guest: "гость",
    baby: "младенец"
  },
  room: {
    room: "спальня",
    bathroom: "ванная комната",
    bed: "кровать"
  }
}

jQuery(function() {
  $dropdowns.each(function() {
    var $currentDropdown = $(this);
    var $currentDecrementType = $currentDropdown.data("type");
    var $values = $currentDropdown.find(`.${classValue}`);
    var itemList = initItemList($currentDecrementType);


    $values.each(function() {
      var $currentValue = $(this);
      var $currentValueType = $currentValue.data("type");
      var guestCount = $currentValue.html();
      itemList[$currentValueType] += Number(guestCount);
    });

    $currentDropdown.data("itemList", itemList);

    setInputText($currentDropdown, buildString(itemList, $currentDecrementType));
  });
});

$dropdowns.on("click", function(e) {
	//e.preventDefault();
	var $currentDropdown = $(this);
	var $currentDropdownMenu = $currentDropdown.find(`.${classDropdownMenu}`)

	if (!$currentDropdownMenu.is(e.target)
      && $currentDropdownMenu.has(e.target).length === 0) {
			toggleDropdown($currentDropdown);
	}

	$dropdowns.each(function() {
		if (!$currentDropdown.is($(this)))
			{
				closeDropdown($(this));
			}
	});
});

$(document).on("click", function(e) {
	if (!$dropdowns.is(e.target)
    && $dropdowns.has(e.target).length === 0)
    {
      closeDropdown($dropdowns);
    }
});

$(`.${classDecrement}`).on ("click", function() {
  var $currentDecrement = $(this);
  var $currentValue = $currentDecrement.parent().find(`.${classValue}`);
  var $currentIncrement = $currentDecrement.parent().find(`.${classIncrement}`);

  let count = $currentValue.html();
  let newCount = Number(count) - 1;

  if (newCount <= minValue) {
    newCount = minValue;
    $currentDecrement.prop("disabled", true);
  }

  if (newCount < maxValue)
    $currentIncrement.prop("disabled", false);

    $currentValue.html(newCount);
});

$(`.${classIncrement}`).on ("click", function() {
  var $currentIncrement = $(this);
  var $currentValue = $currentIncrement.parent().find(`.${classValue}`);
  var $currentDecrement = $currentIncrement.parent().find(`.${classDecrement}`);

  let count = $currentValue.html();
  let newCount = Number(count) + 1;

  if (newCount >= maxValue) {
    newCount = maxValue;
    $currentIncrement.prop("disabled", true);
  }

  if (newCount > minValue)
    $currentDecrement.prop("disabled", false);
    
  $currentValue.html(newCount);
});

function buildString(itemList, type) {
  var resultString = "";
  var dictionaryMap = dictionary[type];

  Object.keys(itemList).forEach(function(item) {
    if (itemList[item] > 0) {
      if (resultString !== "")
        resultString += ", ";
      resultString += itemList[item] + " " + dictionaryMap[item];
    }
  });

  return resultString;
}

function initItemList(type) {
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

function closeDropdown(target) {
	target.removeClass(`${className}_opened`);
	closeExpand(target);
}

function toggleDropdown(target) {
	target.toggleClass(`${className}_opened`);
	toggleExpand(target);
}