import { FilterType } from '../consts';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

const isPointFuture = (point) => // текущая дата находится до начала события
  dayjs().isBefore(point.dateFrom);

const isPointPresent = (point) => // текущая дата находится после начала и до окончания события
  dayjs().isAfter(point.dateFrom) && dayjs().isBefore(point.dateTo);

const isPointPast = (point) => // текущая дата находится после окончания события
  dayjs().isAfter(point.dateTo);

const filter = {
  [FilterType.EVERYTHING]: (points) => [...points],
  [FilterType.FUTURE]: (points) => points.filter((point) => isPointFuture(point)),
  [FilterType.PRESENT]: (points) => points.filter((point) => isPointPresent(point)),
  [FilterType.PAST]: (points) => points.filter((point) => isPointPast(point)),
};

const generateFilter = (points) => Object.entries(filter).map(
  ([filterType, filterPoints]) => ({
    type: filterType,
    hasPoints: filterPoints(points).length > 0,
  }),
);

export {generateFilter};
