import moment from "moment";

const TIME_DICTIONARY = {
  days:   ["день", "дня", "дней"],
  weeks:  ["неделя", "недели", "недель"],
  months: ["месяц", "месяца", "месяцев"],
  years:  ["год", "года", "лет"],
}

function declOfNum(number, titles) {  
  const cases = [2, 0, 1, 1, 1, 2];  
  return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
}

function getTimePassed(date) {
  const now = moment();

  const years = now.diff(date, "years");
  if (years > 0) {
    const timeType = declOfNum(years, TIME_DICTIONARY.years);
    return `${years} ${timeType} назад`;
  }

  const months = now.diff(date, "months");
  if (months > 0) {
    const timeType = declOfNum(months, TIME_DICTIONARY.months);
    return `${months} ${timeType} назад`;
  }

  const weeks = now.diff(date, "weeks");
  if (weeks > 0) {
    const timeType = declOfNum(weeks, TIME_DICTIONARY.weeks);
    return `${weeks} ${timeType} назад`;
  }

  const days = now.diff(date, "days");
  if (days === 0) {
    return "Сегодня"
  } else {
    const timeType = declOfNum(days, TIME_DICTIONARY.days);
    return `${days} ${timeType} назад`;
  }
}

function formatPrice(price) {
  return `${price.toLocaleString("ru-RU")}₽`;
}

export {
  declOfNum,
  getTimePassed,
  formatPrice,
}