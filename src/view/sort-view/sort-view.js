import { createElement } from '../../render';
import { capitalizeLetter } from '../../utils';
import { SORTING_OPTIONS } from '../../consts';


const createSortTemplate = () => `
    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">

    ${SORTING_OPTIONS.map((item) => `
      <div class="trip-sort__item  trip-sort__item--${item.type}">
        <input id="sort-${item.type}"
        class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${item.type}"
        ${item.checked ? 'disabled' : ''}
        >
        <label class="trip-sort__btn" for="sort-${item.type}">${capitalizeLetter(item.type)}</label>
      </div>
      `).join('')}

    </form>
  `;

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
