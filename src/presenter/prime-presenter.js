import { render } from '../framework/render';
import { generateFilters } from '../utils/filter-utils';
import FilterView from '../view/filter-view/filter-view';
import SortView from '../view/sort-view/sort-view';
import ListPointsView from '../view/list-points-view/list-points-view';
import EmptyView from '../view/empty-view/empty-view';
import PointPresenter from './point-presenter';
import { updateItem } from '../utils/common-utils';
import { SortType } from '../consts';
import { sortPointDay, sortPointPrice, sortPointTime } from '../utils/point-utils';

export default class PrimePresenter {
  #filtersContainer = null;
  #tripEventsContainer = null;
  #sortComponent = null;
  #listPointsContainer = new ListPointsView();
  #pointsModel = [];

  #primePoints = [];
  #primeDestinations = [];
  #primeOffers = [];

  #pointPresenters = new Map();
  #currentSortType = SortType.DAY;
  #sourcedPrimePoints = [];

  constructor({pointsModel}) {
    this.#filtersContainer = document.querySelector('.trip-controls__filters');
    this.#tripEventsContainer = document.querySelector('.trip-events');

    this.#pointsModel = pointsModel;
  }

  init() {
    this.#primePoints = [...this.#pointsModel.points];
    this.#sourcedPrimePoints = [...this.#pointsModel.points];

    this.#primeDestinations = [...this.#pointsModel.destinations];
    this.#primeOffers = [...this.#pointsModel.offers];

    this.#renderTrip();
  }

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      listPointsContainer: this.#listPointsContainer.element,
      onDataChange: this.#handlePointChange,
      onModeChange: this.#handleModeChange,
    });
    pointPresenter.init({point, destinations: this.#primeDestinations, offers: this.#primeOffers});
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };

  #handlePointChange = (updatedPoint) => {
    this.#primePoints = updateItem(this.#primePoints, updatedPoint);
    this.#sourcedPrimePoints = updateItem(this.#sourcedPrimePoints, updatedPoint);

    this.#pointPresenters.get(updatedPoint.id).init({point: updatedPoint, destinations: this.#primeDestinations, offers: this.#primeOffers});
  };

  #sortPoints(sortType) {
    // 2. Этот исходный массив задач необходим,
    // потому что для сортировки мы будем мутировать
    // массив в свойстве _boardTasks
    switch (sortType) {
      case SortType.TIME:
        this.#primePoints.sort(sortPointTime);
        break;
      case SortType.PRICE:
        this.#primePoints.sort(sortPointPrice);
        break;
      case SortType.DAY:
        this.#primePoints.sort(sortPointDay);
        break;
      // default:
      //   // 3. А когда пользователь захочет "вернуть всё, как было",
      //   // мы просто запишем в _boardTasks исходный массив
      //   this.#primePoints = [...this.#sourcedPrimePoints];
    }

    this.#currentSortType = sortType;
  }

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#sortPoints(sortType);
    // - Очищаем список
    // - Рендерим список заново
  };

  #renderSort() {
    this.#sortComponent = new SortView({
      onSortTypeChange: this.#handleSortTypeChange
    });
    render(this.#sortComponent, this.#tripEventsContainer);
  }

  #clearPointList() {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
  }

  #renderFilters() {
    const filters = generateFilters(this.#primePoints);
    render(new FilterView(filters), this.#filtersContainer);
  }

  #renderTrip() {
    this.#renderFilters();

    if (this.#primePoints.length <= 0) {
      render(new EmptyView(), this.#tripEventsContainer);
      return;
    }

    this.#renderSort();
    render(this.#listPointsContainer, this.#tripEventsContainer);

    for (let i = 0; i < this.#primePoints.length; i++) {
      this.#renderPoint(this.#primePoints[i]);
    }
  }
}
