import { remove, render, replace } from '../framework/render';
import PointView from '../view/point-view/point-view';
import EditPointView from '../view/edit-point-view/edit-point-view';

export default class PointPresenter {
  #listPointsContainer = null;
  #handleDataChange = null;

  #pointComponent = null;
  #editPointComponent = null;

  #point = null;

  constructor ({listPointsContainer, onDataChange}) {
    this.#listPointsContainer = listPointsContainer;
    this.#handleDataChange = onDataChange;
  }

  init ({point, destinations, offers}) {
    this.#point = point;

    const prevPointComponent = this.#pointComponent;
    const prevEditPointComponent = this.#editPointComponent;

    this.#pointComponent = new PointView(
      {point, destinations, offers,
        onEditClick: this.#handleEditClick,
        onFavoriteClick: this.#handleFavoriteClick,
      }
    );

    this.#editPointComponent = new EditPointView(
      {point, destinations, offers,
        onFormSubmit: this.#handleFormSubmit,
        onFormRollup: this.#handleFormRollup,
      }
    );

    if (prevPointComponent === null || prevEditPointComponent === null) {
      render(this.#pointComponent, this.#listPointsContainer);
      return;
    }

    if (this.#listPointsContainer.contains(prevPointComponent.element)) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#listPointsContainer.contains(prevEditPointComponent.element)) {
      replace(this.#editPointComponent, prevEditPointComponent);
    }

    remove(prevPointComponent);
    remove(prevEditPointComponent);
  }

  destroy() {
    remove(this.#pointComponent);
    remove(this.#editPointComponent);
  }

  #replacePointToForm() {
    replace(this.#editPointComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  #replaceFormToPoint() {
    replace(this.#pointComponent, this.#editPointComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceFormToPoint();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };

  #handleEditClick = () => {
    this.#replacePointToForm();
  };

  #handleFavoriteClick = () => {
    this.#handleDataChange({...this.#point, isFavorite: !this.#point.isFavorite});
  };

  #handleFormSubmit = (point) => {
    this.#handleDataChange(point);
    this.#replaceFormToPoint();
  };

  #handleFormRollup = () => {
    this.#replaceFormToPoint();
  };
}
