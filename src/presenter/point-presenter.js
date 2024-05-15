import { render, replace } from '../framework/render';
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

    render(this.#pointComponent, this.#listPointsContainer);
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
