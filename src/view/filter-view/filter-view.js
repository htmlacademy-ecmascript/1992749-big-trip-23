import { capitalizeLetter } from '../../utils';
import { FILTER_OPTIONS } from '../../consts';
import AbstractView from '../../framework/view/abstract-view';


const createFilterTemplate = () => `
    <form class="trip-filters" action="#" method="get">

    ${FILTER_OPTIONS.map((item) => `
      <div class="trip-filters__filter">
        <input id="filter-${item}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${item}" checked>
        <label class="trip-filters__filter-label" for="filter-${item}">${capitalizeLetter(item)}</label>
      </div>
      `).join('')}

      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>
  `;

export default class FilterView extends AbstractView {

  get template() {
    return createFilterTemplate();
  }
}
