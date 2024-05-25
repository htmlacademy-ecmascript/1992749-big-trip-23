import { capitalizeLetter } from '../../utils/common-utils.js';
import { SortType } from '../../consts';
import AbstractView from '../../framework/view/abstract-view';


const createSortTemplate = () => `
    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">

    ${Object.values(SortType).map((item) => `
      <div class="trip-sort__item  trip-sort__item--${item}">
        <input id="sort-${item}"
        class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${item}"
         data-sort-type="${item}" ${item === 'event' || item === 'offers' ? 'disabled' : ''}
        >
        <label class="trip-sort__btn" for="sort-${item}">${capitalizeLetter(item)}</label>
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
