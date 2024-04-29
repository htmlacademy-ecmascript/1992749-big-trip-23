import { newOffers } from './offers';

// вынес эту функцию в отдельный модуль, чтобы линтер не ругался
// на две переменные с именем offers в модуле src/mock/offers.js
const getOffers = () => newOffers.map(({
  'type': type,
  'offers': offers
}) => ({
  type,
  offers
}));

export { getOffers };
