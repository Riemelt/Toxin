import moment from 'moment';

const TIME_DICTIONARY = {
  days: ['день', 'дня', 'дней'],
  weeks: ['неделю', 'недели', 'недель'],
  months: ['месяц', 'месяца', 'месяцев'],
  years: ['год', 'года', 'лет'],
};

const declOfNum = function declOfNum(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2];
  let index;

  if (number % 100 > 4 && number % 100 < 20) {
    index = 2;
  } else {
    index = cases[(number % 10 < 5) ? number % 10 : 5];
  }

  return titles[index];
};

const getTimePassed = function getTimePassed(date) {
  const now = moment();

  const years = now.diff(date, 'years');

  if (years > 0) {
    const number = years === 1 ? '' : `${years} `;

    const timeType = declOfNum(years, TIME_DICTIONARY.years);
    return `${number}${timeType} назад`;
  }

  const months = now.diff(date, 'months');
  if (months > 0) {
    const number = months === 1 ? '' : `${months} `;

    const timeType = declOfNum(months, TIME_DICTIONARY.months);
    return `${number}${timeType} назад`;
  }

  const weeks = now.diff(date, 'weeks');
  if (weeks > 0) {
    const number = weeks === 1 ? '' : `${weeks} `;

    const timeType = declOfNum(weeks, TIME_DICTIONARY.weeks);
    return `${number}${timeType} назад`;
  }

  const days = now.diff(date, 'days');
  if (days === 0) {
    return 'Сегодня';
  }

  const timeType = declOfNum(days, TIME_DICTIONARY.days);
  return `${days} ${timeType} назад`;
};

const formatPrice = function formatPrice(price) {
  return `${price.toLocaleString('ru-RU')}₽`;
};

const daysDifference = function daysDifference(firstDate, secondDate) {
  const time = secondDate?.getTime() - firstDate?.getTime();
  const days = Math.ceil(time / (1000 * 3600 * 24));
  return days ? days : 0;
};

const renderSlider = function renderSlider({
  $component,
  images = [],
  delay = 4000,
}) {
  let index = 0;

  const changeImage = function changeImage() {
    const path = require(`@images/${images[index].src}`);
    $component.css('background-image', `url(${path})`);
    index = index >= images.length - 1 ? 0 : index + 1;

    setTimeout(changeImage, delay);
  };

  changeImage();
};

const $getElement = function $getElement({
  $parent,
  component,
  element,
}) {
  const elementClass = buildClass(component, element);
  return $parent.find(elementClass);
};

const buildClass = function buildBemClass(component, element) {
  return `.js-${component}__${element}`;
};

export {
  declOfNum,
  getTimePassed,
  formatPrice,
  daysDifference,
  renderSlider,
  $getElement,
};
