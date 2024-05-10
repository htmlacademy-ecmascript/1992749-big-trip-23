
import { createEditPointTemplate } from './edit-point-template';
import { BLANK_POINT } from '../../consts';
import AbstractView from '../../framework/view/abstract-view';

export default class EditPointView extends AbstractView {
  #point = null;
  #destinations = [];
  #offers = [];

  #handleFormSubmit = null;
  #handleFormRollup = null;

  constructor({point = BLANK_POINT, destinations, offers, onFormSubmit, onFormRollup}) {
    super();
    this.#point = point;
    this.#destinations = destinations;
    this.#offers = offers;

    this.#handleFormSubmit = onFormSubmit;
    this.element.querySelector('form').addEventListener('submit', this.#formSubmitHandler);
    this.#handleFormRollup = onFormRollup;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#formRollupHandler);
  }

  get template() {
    return createEditPointTemplate(this.#point, this.#destinations, this.#offers);
  }

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit();
  };

  #formRollupHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormRollup();
  };
}
