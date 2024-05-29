import { humanizeDate, TimeFormat} from '../../utils/point-utils';
import { capitalizeLetter } from '../../utils/common-utils';
import { namesDestination } from '../../mock/destinations';
import { POINT_TYPES } from '../../consts';

const isEditingForm = true;

const getPointType = (type) => POINT_TYPES.map((item) => `
  <div class="event__type-item">
    <input id="event-type-${item}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${item}"
      ${item === type ? 'checked' : ''}>
    <label class="event__type-label  event__type-label--${item}" for="event-type-${item}-1">${capitalizeLetter(item)}</label>
  </div>
`).join('');

const getAvailableOffers = (currentOffersForType, type, point) => (currentOffersForType.length > 0) ? `  
  <h3 class="event__section-title  event__section-title--offers">Offers</h3>
  <div class="event__available-offers">
    ${currentOffersForType.map((item) => `

  <div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden" id="event-offer-${type}-${item.id}" type="checkbox" name="event-offer-${type}" 
    ${point.offers.find((element) => element === item.id) ? 'checked' : ''}>
    <label class="event__offer-label" for="event-offer-${type}-${item.id}">
      <span class="event__offer-title">${item.title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${item.price}</span>
    </label>
  </div>
  
`).join('')}
  </div>
` : '';

const getPhotosContainer = (items) => items.map((item) => `
  <img class="event__photo" src="${item.src}" alt="${item.description}">
  `).join('');

const getAvailableDestination = (point, currentDestination) => (
  currentDestination.pictures.length > 0 || currentDestination.description) ? `
  <h3 class="event__section-title  event__section-title--destination">Destination</h3>

  <p class="event__destination-description">${currentDestination.description}</p>
  ${currentDestination.pictures.length > 0 ? `
  <div class="event__photos-container">
    <div class="event__photos-tape">
    ${getPhotosContainer(currentDestination.pictures)}
    </div>
  </div>
  ` : ''}
` : '';

const createEditPointTemplate = (state, destinations, offers) => {
  const point = state;
  const {basePrice, type, dateFrom, dateTo} = point;
  const currentDestination = destinations.find((item) => item.id === point.destination);
  const currentOffersForType = offers.find((item) => item.type === point.type).offers;

  return `
<li class="trip-events__item">
  <form class="event event--edit" action="#" method="post">
    <header class="event__header">
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Event type</legend>

          ${getPointType(type)}

          </fieldset>
        </div>
      </div>

      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-1">
        ${type}
        </label>
        <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" 
        value="${currentDestination.name}" list="destination-list-1">
          <datalist id="destination-list-1">

          ${namesDestination.map((item) => `
            <option value="${item}"></option>
          `).join('')}

          </datalist>
      </div>

      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-1">From</label>
        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" 
        value="${humanizeDate(dateFrom, TimeFormat.FORMAT_DATE_FOR_FORM_EDIT)}">
        &mdash;
        <label class="visually-hidden" for="event-end-time-1">To</label>
        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" 
        value="${humanizeDate(dateTo, TimeFormat.FORMAT_DATE_FOR_FORM_EDIT)}">
      </div>

      <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-1">
          <span class="visually-hidden">Price</span>
          &euro;
        </label>
        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
      </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">${isEditingForm ? 'Delete' : 'Cancel'}</button>

        ${isEditingForm ? `<button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span></button>` : ''}

    </header>
    <section class="event__details">

        <section class="event__section  event__section--offers">
          ${getAvailableOffers(currentOffersForType, type, point)}
        </section>

        <section class="event__section  event__section--destination">
          ${getAvailableDestination(point, currentDestination)}
        </section>

    </section>
  </form>
</li>
`;
};

export { createEditPointTemplate };
