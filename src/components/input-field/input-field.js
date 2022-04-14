const classNameJs = "js-input-field";
const className = "input-field";

var target = $(`div.${classNameJs}`);

export function toggleExpand(parent) {
	parent.find(target).toggleClass(`${className}_opened`);
};

export function closeExpand(parent) {
	parent.find(target).removeClass(`${className}_opened`);
};
