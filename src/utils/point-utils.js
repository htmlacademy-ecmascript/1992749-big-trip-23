import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

const TimeFormat = {
  SIMPLE_TIME_FORMAT: 'hh:mm', // Время маршрута отображается в формате начало — окончание (например, «10:30 — 11:00»)
  FORMAT_DATE_FROM: 'MMM DD', // Сокращенное название месяца, День месяца, двухзначное число
  FORMAT_DATE_FOR_FORM_EDIT: 'YY/MM/DD HH:mm', // 18/03/19 12:25
  // Формат продолжительности нахождения в точке маршрута зависит от длительности:
  FORMAT_MINUTES: 'mm[M]', // Менее часа: минуты (например, 23M);
  FORMAT_ONE_DAY: 'HH[H] mm[M]', // Менее суток: часы минуты (например, 02H 44M или 12H 00M, если минуты равны нулю);
  FORMAT_DAYS: 'DD[D] HH[H] mm[M]', // Более суток: дни часы минуты (например, 51D 02H 30M или 07D 00H 00M, если часы и/или минуты равны нулю).
};

const TimeInMilliseconds = {
  HOUR: 3600000,
  DAY: 86400000,
};

const humanizeDate = (date, formatDate) => date ? dayjs(date).format(formatDate) : '';

const getCorrectFormat = (dateFrom, dateTo) => {
  const eventDuration = dayjs(dateTo).diff(dateFrom);
  if (eventDuration < TimeInMilliseconds.HOUR) { // миллисекунд менее часа
    return dayjs(eventDuration).format(TimeFormat.FORMAT_MINUTES);
  }
  if (eventDuration >= TimeInMilliseconds.HOUR & eventDuration < TimeInMilliseconds.DAY) { // миллисекунд менее суток
    return dayjs(eventDuration).format(TimeFormat.FORMAT_ONE_DAY);
  }
  if (eventDuration >= TimeInMilliseconds.DAY) { // миллисекунд более суток
    return dayjs(eventDuration).format(TimeFormat.FORMAT_DAYS);
  }
};

export { humanizeDate, getCorrectFormat, TimeFormat};

