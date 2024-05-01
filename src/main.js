import PrimePresenter from './presenter/prime-presenter.js';
import PointsModel from './model/points-model.js';

const pointsModel = new PointsModel();
const primePresenter = new PrimePresenter({pointsModel});

primePresenter.init();
