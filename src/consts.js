const POINT_TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

const SORTING_OPTIONS = [
  { type: 'day' },
  { type: 'event', checked: true },
  { type: 'time' },
  { type: 'price' },
  { type: 'offers', checked: true },
];

const BLANK_POINT = {
  id: '0000',
  basePrice: 0,
  dateFrom: null,
  dateTo: null,
  destination: null,
  isFavorite: false,
  offers: [],
  type: 'flight'
};

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past',
};

export { POINT_TYPES, SORTING_OPTIONS, BLANK_POINT, FilterType };
