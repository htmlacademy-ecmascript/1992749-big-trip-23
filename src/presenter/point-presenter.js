import { remove, render, replace } from '../framework/render';
import PointView from '../view/point-view/point-view';
import EditPointView from '../view/edit-point-view/edit-point-view';

export default class PointPresenter {
  #listPointsContainer = null;

  #pointComponent = null;
  #editPointComponent = null;

  constructor ({listPointsContainer}) {
    this.#listPointsContainer = listPointsContainer;
  }

  init ({point, destinations, offers}) {

    const prevPointComponent = this.#pointComponent;
    const prevEditPointComponent = this.#editPointComponent;

    this.#pointComponent = new PointView(
      {point, destinations, offers,
        onEditClick: () => {
          this.#replacePointToForm();
          document.addEventListener('keydown', this.#escKeyDownHandler);
        }
      }
    );

    this.#editPointComponent = new EditPointView(
      {point, destinations, offers,
        onFormSubmit: () => {
          this.#replaceFormToPoint();
          document.removeEventListener('keydown', this.#escKeyDownHandler);
        },
        onFormRollup: () => {
          this.#replaceFormToPoint();
          document.removeEventListener('keydown', this.#escKeyDownHandler);
        }
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

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceFormToPoint();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };

  #replacePointToForm() {
    replace(this.#editPointComponent, this.#pointComponent);
  }

  #replaceFormToPoint() {
    replace(this.#pointComponent, this.#editPointComponent);
  }
}
