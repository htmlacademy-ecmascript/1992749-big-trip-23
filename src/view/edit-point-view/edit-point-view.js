
import { createEditPointTemplate } from './edit-point-template';
import { BLANK_POINT } from '../../consts';
import AbstractView from '../../framework/view/abstract-view';

export default class EditPointView extends AbstractView {
  #point = null;
  #destinations = null;
  #offers = null;

  #handleFormSubmit = null;

  constructor({point = BLANK_POINT, destinations, offers, onFormSubmit}) {
    super();
    this.#point = point;
    this.#destinations = destinations;
    this.#offers = offers;

    this.#handleFormSubmit = onFormSubmit;
    this.element.querySelector('.event__save-btn').addEventListener('click', this.#formSubmitHandler);
  }

  get template() {
    return createEditPointTemplate(this.#point, this.#destinations, this.#offers);
  }

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit();
  };
}
