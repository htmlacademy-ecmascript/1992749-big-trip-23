import AbstractView from '../../framework/view/abstract-view';
import { createPointTemplate } from './point-template';

export default class PointView extends AbstractView {
  #point = null;
  #destinations = null;
  #offers = null;

  constructor({point, destinations, offers}) {
    super();
    this.#point = point;
    this.#destinations = destinations;
    this.#offers = offers;
  }

  get template() {
    return createPointTemplate(this.#point, this.#destinations, this.#offers);
  }
}
