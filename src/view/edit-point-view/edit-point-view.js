
import { createEditPointTemplate } from './edit-point-template';
import { BLANK_POINT } from '../../consts';
import AbstractView from '../../framework/view/abstract-view';

export default class EditPointView extends AbstractView {
  #point = null;
  #destinations = null;
  #offers = null;

  constructor({point = BLANK_POINT, destinations, offers}) {
    super();
    this.#point = point;
    this.#destinations = destinations;
    this.#offers = offers;
  }

  get template() {
    return createEditPointTemplate(this.#point, this.#destinations, this.#offers);
  }
}
