
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
    this.element.querySelector('form').addEventListener('submit', this.#formSubmitHandler);
    this.#handleFormRollup = onFormRollup;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#formRollupHandler);
  }

  get template() {
    return createEditPointTemplate(this._state, this.#destinations, this.#offers);
  }

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit(EditPointView.parseStateToPoint(this._state));
  };

  #formRollupHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormRollup();
  };

  static parsePointToState(point) {
    return {...point};
  }

  static parseStateToPoint(state) {
    const point = {...state};
    return point;
  }
}
