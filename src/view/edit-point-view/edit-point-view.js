import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { createEditPointTemplate } from './edit-point-template';
import { BLANK_POINT } from '../../consts';
import AbstractStatefulView from '../../framework/view/abstract-stateful-view';

export default class EditPointView extends AbstractStatefulView {

  #destinations = [];
  #offers = [];

  #handleFormSubmit = null;
  #handleFormRollup = null;
  #datepickerFrom = null;
  #datepickerTo = null;

  constructor({point = BLANK_POINT, destinations, offers, onFormSubmit, onFormRollup}) {
    super();

    this._setState(EditPointView.parsePointToState(point));
    this.#destinations = destinations;
    this.#offers = offers;

    this.#handleFormSubmit = onFormSubmit;
    this.#handleFormRollup = onFormRollup;
    this._restoreHandlers();
  }

  get template() {
    return createEditPointTemplate(this._state, this.#destinations, this.#offers);
  }

  removeElement() {
    super.removeElement();

    if (this.#datepickerFrom) {
      this.#datepickerFrom.destroy();
      this.#datepickerFrom = null;
    }

    if (this.#datepickerTo) {
      this.#datepickerTo.destroy();
      this.#datepickerTo = null;
    }
  }

  reset(point) {
    this.updateElement(
      EditPointView.parsePointToState(point),
    );
  }

  _restoreHandlers() {
    this.element.querySelector('form').addEventListener('submit', this.#formSubmitHandler);
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#formRollupHandler);
    this.element.querySelector('.event__type-group').addEventListener('change', this.#eventTypeToggleHandler);
    this.element.querySelector('.event__input--destination').addEventListener('change', this.#destinationListToggleHandler);
    this.element.querySelector('.event__input--price').addEventListener('change',this.#priceChangeHandler);
    if (this.element.querySelector('.event__available-offers')) {
      this.element.querySelector('.event__available-offers').addEventListener('change', this.#offerClickHandler);
    }

    this.#setDatepicker();
  }

  #priceChangeHandler = (evt) => {
    this._setState({
      basePrice: Number(evt.target.value)
    });
  };

  #offerClickHandler = (evt) => {
    evt.preventDefault();
    const checkboxes = Array.from(this.element.querySelectorAll('.event__offer-checkbox:checked'));

    this.updateElement({
      offers: checkboxes.map((element) => element.dataset.id),
    });
  };

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit(EditPointView.parseStateToPoint(this._state));
  };

  #formRollupHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormRollup();
  };

  #eventTypeToggleHandler = (evt) => {
    evt.preventDefault();
    this.updateElement({
      type: evt.target.value,
    });
  };

  #destinationListToggleHandler = (evt) => {
    evt.preventDefault();
    const selectedDistination = this.#destinations.find((item) => item.name === evt.target.value);
    const selectedDistinationId = (selectedDistination) ? selectedDistination.id : this._state.destination;

    this.updateElement({
      destination: selectedDistinationId,
    });
  };

  #dateFromChangeHandler = ([userDate]) => {
    this._setState({
      dateFrom: userDate,
    });
  };

  #dateToChangeHandler = ([userDate]) => {
    this._setState({
      dateTo: userDate,
    });
  };

  #setDatepicker() {

    this.#datepickerFrom = flatpickr(
      this.element.querySelector('#event-start-time-1'),
      {
        enableTime: true,
        dateFormat: 'd/m/y H:i',
        defaultDate: this._state.dateFrom,
        maxDate: this._state.dateTo,
        onClose: this.#dateFromChangeHandler,
        'time_24hr': true,
      },
    );

    this.#datepickerTo = flatpickr(
      this.element.querySelector('#event-end-time-1'),
      {
        enableTime: true,
        dateFormat: 'd/m/y H:i',
        defaultDate: this._state.dateTo,
        minDate: this._state.dateFrom,
        onClose: this.#dateToChangeHandler,
        'time_24hr': true,
      },
    );
  }

  static parsePointToState(point) {
    return {...point};
  }

  static parseStateToPoint(state) {
    const point = {...state};
    return point;
  }
}
