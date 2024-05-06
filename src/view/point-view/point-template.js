import { humanizeDate, getCorrectFormat, TimeFormat, capitalizeLetter } from '../../utils';

const selectedOffers = (pointOffers, currentOffersForType) => (pointOffers.length > 0) ? `
  <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
    ${currentOffersForType.map((item) => (pointOffers.includes(item.id)) ? `
    <li class="event__offer">
      <span class="event__offer-title">${item.title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${item.price}</span>
    </li> 
    ` : '').join('')}
    </ul>` : '';

const createPointTemplate = (point, destinations, offers) => {
  const {basePrice, type, isFavorite, dateFrom, dateTo} = point;
  const currentDestination = destinations.find((item) => item.id === point.destination);
  const currentOffersForType = offers.find((item) => item.type === point.type).offers;
  const pointOffers = point.offers;

  return `
 <li class="trip-events__item">
  <div class="event">
    <time class="event__date" datetime="${dateFrom}">${humanizeDate(dateFrom, TimeFormat.SIMPLE_TIME_FORMAT)}</time>
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
    </div>
    <h3 class="event__title">${capitalizeLetter(type)} ${currentDestination.name}</h3>
    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="${dateFrom}">${humanizeDate(dateFrom, TimeFormat.SIMPLE_TIME_FORMAT)}</time>
        &mdash;
        <time class="event__end-time" datetime="${dateTo}">${humanizeDate(dateTo, TimeFormat.SIMPLE_TIME_FORMAT)}</time>
      </p>
      <p class="event__duration">${getCorrectFormat(dateFrom, dateTo)}</p>
    </div>
    <p class="event__price">
      &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
    </p>

    ${selectedOffers(pointOffers, currentOffersForType)}

    <button class="event__favorite-btn  ${isFavorite ? 'event__favorite-btn--active' : ''}" type="button">
      <span class="visually-hidden">Add to favorite</span>
      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 
        14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
      </svg>
    </button>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>
 </li>
  `;
};

export { createPointTemplate };
