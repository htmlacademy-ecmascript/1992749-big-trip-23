import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

const capitalizeLetter = (someString) => someString[0].toUpperCase() + someString.slice(1);

const TIME_FORMAT = 'hh:mm'; // Время маршрута отображается в формате начало — окончание (например, «10:30 — 11:00»)
const FORMAT_DATE_FROM = 'MMM DD'; // Сокращенное название месяца, День месяца, двухзначное число
const FORMAT_DATE_FOR_FORM_EDIT = 'YY/MM/DD HH:mm'; // 18/03/19 12:25
// Формат продолжительности нахождения в точке маршрута зависит от длительности:
const FORMAT_MINUTES = 'mm[M]'; // Менее часа: минуты (например, 23M);
const FORMAT_ONE_DAY = 'HH[H] mm[M]'; // Менее суток: часы минуты (например, 02H 44M или 12H 00M, если минуты равны нулю);
const FORMAT_DAYS = 'DD[D] HH[H] mm[M]'; // Более суток: дни часы минуты (например, 51D 02H 30M или 07D 00H 00M, если часы и/или минуты равны нулю).

const humanizeDate = (date, formatDate) => date ? dayjs(date).format(formatDate) : '';

const getCorrectFormat = (dateFrom, dateTo) => {
  const eventDuration = dayjs(dateTo).diff(dateFrom);
  if (eventDuration < 3600000) { // миллисекунд менее часа
    return dayjs(eventDuration).format(FORMAT_MINUTES);
  }
  if (eventDuration >= 3600000 & eventDuration < 86400000) { // миллисекунд менее суток
    return dayjs(eventDuration).format(FORMAT_ONE_DAY);
  }
  if (eventDuration >= 86400000) { // миллисекунд более суток
    return dayjs(eventDuration).format(FORMAT_DAYS);
  }
};

export {capitalizeLetter, humanizeDate, TIME_FORMAT, FORMAT_DATE_FROM, FORMAT_DATE_FOR_FORM_EDIT, getCorrectFormat};

