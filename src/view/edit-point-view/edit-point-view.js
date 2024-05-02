import { createElement } from '../../render';
import { createEditPointTemplate } from './edit-point-template';
import { BLANK_POINT } from '../../consts';

export default class EditPointView {
  constructor({point = BLANK_POINT}) {
    this.point = point;
  }

  getTemplate() {
    return createEditPointTemplate(this.point);
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
