import { render, replace } from '../framework/render';
import FilterView from '../view/filter-view/filter-view';
import SortView from '../view/sort-view/sort-view';
import ListPointsView from '../view/list-points-view/list-points-view';
import EditPointView from '../view/edit-point-view/edit-point-view';
import PointView from '../view/point-view/point-view';
import EmptyView from '../view/empty-view/empty-view';

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

    this.#renderTrip();
  }

  #renderPoint(point) {

    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const pointComponent = new PointView(
      {point, destinations: this.#primeDestinations, offers: this.#primeOffers,
        onEditClick: () => {
          replacePointToForm();
          document.addEventListener('keydown', escKeyDownHandler);
        }
      }
    );

    const editPointComponent = new EditPointView(
      {point: this.#primePoints[10], destinations: this.#primeDestinations, offers: this.#primeOffers,
        onFormSubmit: () => {
          replaceFormToPoint();
          document.removeEventListener('keydown', escKeyDownHandler);
        },
        onFormRollup: () => {
          replaceFormToPoint();
          document.removeEventListener('keydown', escKeyDownHandler);
        }
      }
    );

    function replacePointToForm() {
      replace(editPointComponent, pointComponent);
    }

    function replaceFormToPoint() {
      replace(pointComponent, editPointComponent);
    }

    render(pointComponent, this.#listPointsContainer.element);
  }

  #renderTrip() {
    render(new FilterView(), this.#filtersContainer);

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
