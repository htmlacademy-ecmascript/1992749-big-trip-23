import { render } from '../framework/render';
import { generateFilters } from '../utils/filter-utils';
import FilterView from '../view/filter-view/filter-view';
import SortView from '../view/sort-view/sort-view';
import ListPointsView from '../view/list-points-view/list-points-view';
import EmptyView from '../view/empty-view/empty-view';
import PointPresenter from './point-presenter';
import { updateItem } from '../utils/common-utils';

export default class PrimePresenter {
  #filtersContainer = null;
  #tripEventsContainer = null;

  #listPointsContainer = new ListPointsView();
  #pointsModel = [];

  #primePoints = [];
  #primeDestinations = [];
  #primeOffers = [];

  #pointPresenters = new Map();

  constructor({pointsModel}) {
    this.#filtersContainer = document.querySelector('.trip-controls__filters');
    this.#tripEventsContainer = document.querySelector('.trip-events');

    this.#pointsModel = pointsModel;
  }

  init() {
    this.#primePoints = [...this.#pointsModel.points];
    this.#primeDestinations = [...this.#pointsModel.destinations];
    this.#primeOffers = [...this.#pointsModel.offers];

    this.#renderTrip();
  }

  #renderPoint(point) {
    const pointPresenter = new PointPresenter(
      {listPointsContainer: this.#listPointsContainer.element}
    );
    pointPresenter.init({point, destinations: this.#primeDestinations, offers: this.#primeOffers});
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #handlePointChange = (updatedPoint) => {
    this.#primePoints = updateItem(this.#primePoints, updatedPoint);
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint);
  };

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

    render(new SortView(), this.#tripEventsContainer);
    render(this.#listPointsContainer, this.#tripEventsContainer);

    for (let i = 0; i < this.#primePoints.length; i++) {
      this.#renderPoint(this.#primePoints[i]);
    }
  }
}
