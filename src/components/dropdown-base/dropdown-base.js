import { toggleExpand, closeExpand } from "../input-field/input-field.js";

const classNameJs = "js-dropdown-base";
const className = "dropdown-base";
const classDropdownMenu = `js-${className}__menu`;

var $dropdown = $(`div.${classNameJs}`);

$dropdown.on("click", function(e) {
	e.preventDefault();
	var $currentDropdown = $(this);
	var $currentDropdownMenu = $currentDropdown.find(`div.${classDropdownMenu}`)

	if (!$currentDropdownMenu.is(e.target)
	   && $currentDropdownMenu.has(e.target).length === 0) {
			toggleDropdown($currentDropdown);
	}

	$dropdown.each(function() {
		if (!$currentDropdown.is($(this)))
			{
				closeDropdown($(this));
			}
	});
});

$(document).on("click", function(e) {
	if (!$dropdown.is(e.target)
		 && $dropdown.has(e.target).length === 0)
		 {
			closeDropdown($dropdown);
		 }
});

function closeDropdown(target) {
	target.removeClass(`${className}_opened`);
	closeExpand(target);
};

function toggleDropdown(target) {
	target.toggleClass(`${className}_opened`);
	toggleExpand(target);
};