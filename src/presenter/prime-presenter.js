import { render } from '../framework/render';
import FilterView from '../view/filter-view/filter-view';
import SortView from '../view/sort-view/sort-view';
import ListPointsView from '../view/list-points-view/list-points-view';
//import EditPointView from '../view/edit-point-view/edit-point-view';
import PointView from '../view/point-view/point-view';

export default class PrimePresenter {
  #filtersContainer = null;
  #tripEventsContainer = null;

  #listPointsContainer = new ListPointsView();
  #pointsModel = [];

  #primePoints = [];
  #primeDestinations = [];
  #primeOffers = [];

  constructor({pointsModel}) {
    this.#filtersContainer = document.querySelector('.trip-controls__filters');
    this.#tripEventsContainer = document.querySelector('.trip-events');

    this.#pointsModel = pointsModel;
  }

  init() {
    this.#primePoints = [...this.#pointsModel.points];
    this.#primeDestinations = [...this.#pointsModel.destinations];
    this.#primeOffers = [...this.#pointsModel.offers];

    render(new FilterView(), this.#filtersContainer);
    render(new SortView(), this.#tripEventsContainer);
    render(this.#listPointsContainer, this.#tripEventsContainer);

    for (let i = 0; i < this.#primePoints.length; i++) {
      this.#renderPoint(this.#primePoints[i]);
    }
  }

  #renderPoint(point) {
    const pointComponent = new PointView(
      {point, destinations: this.#primeDestinations, offers: this.#primeOffers}
    );
    render(pointComponent, this.#listPointsContainer.element);
  }
}
