import { createElement } from '../../render';
import { createEditPointTemplate } from './edit-point-template';
import { BLANK_POINT } from '../../consts';

export default class EditPointView {
  constructor({point = BLANK_POINT, destinations, offers}) {
    this.point = point;
    this.destinations = destinations;
    this.offers = offers;
  }

  getTemplate() {
    return createEditPointTemplate(this.point, this.destinations, this.offers);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
