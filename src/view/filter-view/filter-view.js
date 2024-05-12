import { capitalizeLetter } from '../../utils/common-utils';
import AbstractView from '../../framework/view/abstract-view';

const createFilterTemplate = (filters) => `
    <form class="trip-filters" action="#" method="get">

    ${filters.map((item) => `
      <div class="trip-filters__filter">
        <input id="filter-${item.type}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter"
        ${item.hasPoints ? '' : 'disabled'}
        value="${item.type}" checked>
        <label class="trip-filters__filter-label" for="filter-${item.type}">${capitalizeLetter(item.type)}</label>
      </div>
      `).join('')}

      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>
  `;
export default class FilterView extends AbstractView {
  #filters = [];

  constructor(filters) {
    super();
    this.#filters = filters;
  }

  get template() {
    return createFilterTemplate(this.#filters);
  }
}
