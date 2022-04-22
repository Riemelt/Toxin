const classNameJs = "js-input-field";
const className = "input-field";

const classInputJs = `js-${className}__input`;

const target = $(`div.${classNameJs}`);

export function toggleExpand(parent) {
	parent.find(target).toggleClass(`${className}_opened`);
}

export function closeExpand(parent) {
	parent.find(target).removeClass(`${className}_opened`);
}

export function setInputText(parent, text) {
	parent.find(`.${classInputJs}`).prop("placeholder", text);
}
