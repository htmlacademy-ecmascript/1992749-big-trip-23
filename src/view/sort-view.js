import { createElement } from '../render';
import { capitalizeLetter } from '../utils';

const valuesToSort = ['day', 'event', 'time', 'price', 'offers'];

function createSortTemplate() {
  return `
    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">

    ${valuesToSort.map((item) => `
      <div class="trip-sort__item  trip-sort__item--${item}">
        <input id="sort-${item}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${item}">
        <label class="trip-sort__btn" for="sort-${item}">${capitalizeLetter(item)}</label>
      </div>
      `).join('')}

    </form>
  `;
}

export default class SortView {
  getTemplate() {
    return createSortTemplate();
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
