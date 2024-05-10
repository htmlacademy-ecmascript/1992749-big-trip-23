import AbstractView from '../../framework/view/abstract-view';
/*
Значение отображаемого текста зависит от выбранного фильтра:
* Everthing – 'Click New Event to create your first point'
* Past — 'There are no past events now';
* Present — 'There are no present events now';
* Future — 'There are no future events now'.
*/
function createNoPointTemplate() {
  return (
    `<p class="trip-events__msg">
    Click New Event to create your first point
    </p>`
  );
}

export default class EmptyView extends AbstractView {
  get template() {
    return createNoPointTemplate();
  }
}


