import { createElement } from '../../render';
import { createAddNewPointTemplate } from './add-new-point-template';


export default class AddNewPointView {
  getTemplate() {
    return createAddNewPointTemplate();
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
