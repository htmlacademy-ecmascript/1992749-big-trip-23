
import { createEditPointTemplate } from './edit-point-template';
import { BLANK_POINT } from '../../consts';
import AbstractStatefulView from '../../framework/view/abstract-stateful-view';

export default class EditPointView extends AbstractStatefulView {

  #destinations = [];
  #offers = [];

  #handleFormSubmit = null;
  #handleFormRollup = null;

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

  reset(point) {
    this.updateElement(
      EditPointView.parsePointToState(point),
    );
  }

  _restoreHandlers() {
    this.element.querySelector('form').addEventListener('submit', this.#formSubmitHandler);
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#formRollupHandler);
    this.element.querySelector('.event__type-group').addEventListener('change', this.#eventTypeToggleHandler);
  }

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

  static parsePointToState(point) {
    return {...point};
  }

  static parseStateToPoint(state) {
    const point = {...state};
    return point;
  }
}
