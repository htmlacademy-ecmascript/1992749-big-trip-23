(()=>{"use strict";function e(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function t(e,t,n="beforeend"){t.insertAdjacentElement(n,e.getElement())}const n=e=>e[0].toUpperCase()+e.slice(1),s=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"],i=["everything","future","present","past"],a=[{type:"day"},{type:"event",checked:!0},{type:"time"},{type:"price"},{type:"offers",checked:!0}];class l{getTemplate(){return`\n    <form class="trip-filters" action="#" method="get">\n\n    ${i.map((e=>`\n      <div class="trip-filters__filter">\n        <input id="filter-${e}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${e}" checked>\n        <label class="trip-filters__filter-label" for="filter-${e}">${n(e)}</label>\n      </div>\n      `)).join("")}\n\n      <button class="visually-hidden" type="submit">Accept filter</button>\n    </form>\n  `}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class o{getTemplate(){return`\n    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n\n    ${a.map((e=>`\n      <div class="trip-sort__item  trip-sort__item--${e.type}">\n        <input id="sort-${e.type}"\n        class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${e.type}"\n        ${e.checked?"disabled":""}\n        >\n        <label class="trip-sort__btn" for="sort-${e.type}">${n(e.type)}</label>\n      </div>\n      `)).join("")}\n\n    </form>\n  `}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class c{getTemplate(){return'\n    <ul class="trip-events__list">\n    </ul>\n  '}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const r=[{id:"fd711e58-3cac-43b8-a3ce-cfda284d3fcc",description:"",name:"Oslo",pictures:[]},{id:"570890ce-cb81-443c-9a43-78678678a433",description:"Kioto - with an embankment of a mighty river as a centre of attraction",name:"Kioto",pictures:[{src:"https://23.objects.htmlacademy.pro/static/destinations/10.jpg",description:"Kioto famous for its crowded street markets with the best street food in Asia"},{src:"https://23.objects.htmlacademy.pro/static/destinations/19.jpg",description:"Kioto with a beautiful old town"},{src:"https://23.objects.htmlacademy.pro/static/destinations/17.jpg",description:"Kioto a true asian pearl"},{src:"https://23.objects.htmlacademy.pro/static/destinations/3.jpg",description:"Kioto in a middle of Europe"}]},{id:"cde4182a-6c82-4de6-9b68-c7f2c2452f67",description:"Sochi - famous for its crowded street markets with the best street food in Asia",name:"Sochi",pictures:[{src:"https://23.objects.htmlacademy.pro/static/destinations/12.jpg",description:"Sochi with a beautiful old town"}]},{id:"6f0d0a81-22bd-482b-949f-65db24a0a593",description:"Saint Petersburg - a true asian pearl",name:"Saint Petersburg",pictures:[{src:"https://23.objects.htmlacademy.pro/static/destinations/19.jpg",description:"Saint Petersburg with crowded streets"},{src:"https://23.objects.htmlacademy.pro/static/destinations/11.jpg",description:"Saint Petersburg middle-eastern paradise"}]},{id:"ee996048-2365-475d-9547-3ae95f553d80",description:"Venice - a true asian pearl",name:"Venice",pictures:[{src:"https://23.objects.htmlacademy.pro/static/destinations/1.jpg",description:"Venice in a middle of Europe"},{src:"https://23.objects.htmlacademy.pro/static/destinations/1.jpg",description:"Venice middle-eastern paradise"},{src:"https://23.objects.htmlacademy.pro/static/destinations/12.jpg",description:"Venice a perfect place to stay with a family"}]},{id:"cd23a18e-0a10-4d4e-b6a7-a39ea89f53bb",description:"",name:"Amsterdam",pictures:[]},{id:"e1844f36-98ed-43d2-8663-0ea4c3dc9c90",description:"",name:"Tokio",pictures:[]},{id:"6ae9f746-9662-483b-aeee-036f3a06b92d",description:"Nagasaki - for those who value comfort and coziness",name:"Nagasaki",pictures:[{src:"https://23.objects.htmlacademy.pro/static/destinations/1.jpg",description:"Nagasaki for those who value comfort and coziness"},{src:"https://23.objects.htmlacademy.pro/static/destinations/5.jpg",description:"Nagasaki in a middle of Europe"},{src:"https://23.objects.htmlacademy.pro/static/destinations/5.jpg",description:"Nagasaki is a beautiful city"},{src:"https://23.objects.htmlacademy.pro/static/destinations/20.jpg",description:"Nagasaki for those who value comfort and coziness"},{src:"https://23.objects.htmlacademy.pro/static/destinations/9.jpg",description:"Nagasaki for those who value comfort and coziness"}]},{id:"938f2e20-aea8-43a9-9bd7-49333d78cc58",description:"Madrid - for those who value comfort and coziness",name:"Madrid",pictures:[{src:"https://23.objects.htmlacademy.pro/static/destinations/6.jpg",description:"Madrid full of of cozy canteens where you can try the best coffee in the Middle East"}]},{id:"38f3ccb5-14dd-48ac-9d9b-8e47d51053c9",description:"Vien - with crowded streets",name:"Vien",pictures:[]}].map((({id:e,description:t,name:n,pictures:s})=>({id:e,description:t,name:n,pictures:s}))).map((e=>e.name));class p{getTemplate(){return`\n<li class="trip-events__item">\n  <form class="event event--edit" action="#" method="post">\n    <header class="event__header">\n      <div class="event__type-wrapper">\n        <label class="event__type  event__type-btn" for="event-type-toggle-1">\n          <span class="visually-hidden">Choose event type</span>\n          <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">\n        </label>\n        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n        <div class="event__type-list">\n          <fieldset class="event__type-group">\n            <legend class="visually-hidden">Event type</legend>\n\n          ${s.map((e=>`\n<div class="event__type-item">\n  <input id="event-type-${e}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${e}">\n  <label class="event__type-label  event__type-label--${e}" for="event-type-${e}-1">${n(e)}</label>\n</div>\n`)).join("")}\n\n          </fieldset>\n        </div>\n      </div>\n\n      <div class="event__field-group  event__field-group--destination">\n        <label class="event__label  event__type-output" for="event-destination-1">\n          Flight\n        </label>\n        <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Chamonix" list="destination-list-1">\n          <datalist id="destination-list-1">\n\n          ${r.map((e=>`\n            <option value="${e}"></option>\n          `)).join("")}\n\n          </datalist>\n      </div>\n\n      <div class="event__field-group  event__field-group--time">\n        <label class="visually-hidden" for="event-start-time-1">From</label>\n        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 12:25">\n        &mdash;\n        <label class="visually-hidden" for="event-end-time-1">To</label>\n        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 13:35">\n      </div>\n\n      <div class="event__field-group  event__field-group--price">\n        <label class="event__label" for="event-price-1">\n          <span class="visually-hidden">Price</span>\n          &euro;\n        </label>\n        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="160">\n      </div>\n\n        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n        <button class="event__reset-btn" type="reset">Delete</button>\n\n        <button class="event__rollup-btn" type="button">\n        <span class="visually-hidden">Open event</span></button>\n\n    </header>\n    <section class="event__details">\n        <section class="event__section  event__section--offers">\n          <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n          \n<div class="event__available-offers">\n  <div class="event__offer-selector">\n    <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>\n    <label class="event__offer-label" for="event-offer-luggage-1">\n      <span class="event__offer-title">Add luggage</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">50</span>\n    </label>\n  </div>\n\n  <div class="event__offer-selector">\n    <input class="event__offer-checkbox  visually-hidden" id="event-offer-comfort-1" type="checkbox" name="event-offer-comfort" checked>\n    <label class="event__offer-label" for="event-offer-comfort-1">\n      <span class="event__offer-title">Switch to comfort</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">80</span>\n    </label>\n  </div>\n\n  <div class="event__offer-selector">\n    <input class="event__offer-checkbox  visually-hidden" id="event-offer-meal-1" type="checkbox" name="event-offer-meal">\n    <label class="event__offer-label" for="event-offer-meal-1">\n      <span class="event__offer-title">Add meal</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">15</span>\n    </label>\n  </div>\n\n  <div class="event__offer-selector">\n    <input class="event__offer-checkbox  visually-hidden" id="event-offer-seats-1" type="checkbox" name="event-offer-seats">\n      <label class="event__offer-label" for="event-offer-seats-1">\n      <span class="event__offer-title">Choose seats</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">5</span>\n    </label>\n  </div>\n\n  <div class="event__offer-selector">\n    <input class="event__offer-checkbox  visually-hidden" id="event-offer-train-1" type="checkbox" name="event-offer-train">\n      <label class="event__offer-label" for="event-offer-train-1">\n      <span class="event__offer-title">Travel by train</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">40</span>\n    </label>\n  </div>\n</div>\n\n\n        </section>\n\n        <section class="event__section  event__section--destination">\n          <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n\n          \n<p class="event__destination-description">Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.</p>\n\n\n          \n<div class="event__photos-container">\n  <div class="event__photos-tape">\n    <img class="event__photo" src="img/photos/1.jpg" alt="Event photo">\n    <img class="event__photo" src="img/photos/2.jpg" alt="Event photo">\n    <img class="event__photo" src="img/photos/3.jpg" alt="Event photo">\n    <img class="event__photo" src="img/photos/4.jpg" alt="Event photo">\n    <img class="event__photo" src="img/photos/5.jpg" alt="Event photo">\n  </div>\n</div>\n\n\n        </section>\n    </section>\n  </form>\n</li>\n  `}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class d{getTemplate(){return'\n <li class="trip-events__item">\n  <div class="event">\n    <time class="event__date" datetime="2019-03-18">MAR 18</time>\n    <div class="event__type">\n      <img class="event__type-icon" width="42" height="42" src="img/icons/taxi.png" alt="Event type icon">\n    </div>\n    <h3 class="event__title">Taxi Amsterdam</h3>\n    <div class="event__schedule">\n      <p class="event__time">\n        <time class="event__start-time" datetime="2019-03-18T10:30">10:30</time>\n        &mdash;\n        <time class="event__end-time" datetime="2019-03-18T11:00">11:00</time>\n      </p>\n      <p class="event__duration">30M</p>\n    </div>\n    <p class="event__price">\n      &euro;&nbsp;<span class="event__price-value">20</span>\n    </p>\n    <h4 class="visually-hidden">Offers:</h4>\n    <ul class="event__selected-offers">\n      <li class="event__offer">\n        <span class="event__offer-title">Order Uber</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">20</span>\n      </li>\n    </ul>\n    <button class="event__favorite-btn event__favorite-btn--active" type="button">\n      <span class="visually-hidden">Add to favorite</span>\n      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n      </svg>\n    </button>\n    <button class="event__rollup-btn" type="button">\n      <span class="visually-hidden">Open event</span>\n    </button>\n  </div>\n </li>\n  '}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}(new class{listPointsContainer=new c;constructor(){this.filtersContainer=document.querySelector(".trip-controls__filters"),this.tripEventsContainer=document.querySelector(".trip-events")}init(){t(new l,this.filtersContainer),t(new o,this.tripEventsContainer),t(this.listPointsContainer,this.tripEventsContainer),t(new p,this.listPointsContainer.getElement());for(let e=0;e<3;e++)t(new d,this.listPointsContainer.getElement())}}).init()})();
//# sourceMappingURL=bundle.844aa46034f9ae493753.js.map