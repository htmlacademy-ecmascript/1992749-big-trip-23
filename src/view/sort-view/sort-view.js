import { capitalizeLetter } from '../../utils/common-utils.js';
import { SortType } from '../../consts';
import AbstractView from '../../framework/view/abstract-view';


const createSortTemplate = () => `
    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">

    ${SortType.map((item) => `
      <div class="trip-sort__item  trip-sort__item--${item.type}">
        <input id="sort-${item.type}"
        class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${item.type}"
        ${item.checked ? 'disabled' : ''} data-sort-type="${item.type}"
        >
        <label class="trip-sort__btn" for="sort-${item.type}">${capitalizeLetter(item.type)}</label>
      </div>
      `).join('')}

    </form>
  `;

export default class SortView extends AbstractView {
  #handleSortTypeChange = null;

  constructor({onSortTypeChange}) {
    super();
    this.#handleSortTypeChange = onSortTypeChange;

    this.element.addEventListener('change', this.#sortTypeChangeHandler);
  }

  #sortTypeChangeHandler = (evt) => {
    evt.preventDefault();
    this.#handleSortTypeChange(evt.target.dataset.sortType);
  };

  get template() {
    return createSortTemplate();
  }
}
