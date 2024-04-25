import { render } from './render.js';
import FilterView from './view/filter-view.js';
import PointView from './view/point-view/point-view.js';
import ListPointsView from './view/list-points-view/list-points-view.js';
import SortView from './view/sort-view.js';
import EditPointView from './view/edit-point-view/edit-point-view.js';

const filtersContainer = document.querySelector('.trip-controls__filters');
const tripEventsContainer = document.querySelector('.trip-events');

render(new SortView(), tripEventsContainer);
const pointListComponent = new ListPointsView();
render(pointListComponent, tripEventsContainer);

render(new FilterView(), filtersContainer);
render(new EditPointView(), pointListComponent.getElement());
render(new PointView(), pointListComponent.getElement());

//console.log(pointListComponent.getElement());
import AddNewPointView from './view/add-new-point-view/add-new-point-view.js';
render(new AddNewPointView(), pointListComponent.getElement());
