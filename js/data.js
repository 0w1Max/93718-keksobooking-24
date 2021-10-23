import {TITLE_LIST, DESCRIPTION_LIST, TYPE_LIST, CHECK_TIME, FEATURES_LIST, PHOTOS_LIST} from './initial.js';
import {getRandomNumber, getRandomInteger, getRandomArray} from './utils.js';

// Создаём объект
function createObj () {
  // Координаты
  const LAT = getRandomNumber(35.65000, 35.70000, 5);
  const LNG = getRandomNumber(139.70000, 139.80000, 5);

  const objTemplate = {
    author: {
      avatar: '',
    },
    offer: {
      title: TITLE_LIST[getRandomInteger(0, TITLE_LIST.length - 1)],
      address: `${LAT}, ${LNG}`,
      price: getRandomInteger(1000, 30000),
      type: TYPE_LIST[getRandomInteger(0, TYPE_LIST.length - 1)],
      rooms: getRandomInteger(1, 4),
      guests: getRandomInteger(0, 3),
      checkin: CHECK_TIME[getRandomInteger(0, CHECK_TIME.length - 1)],
      checkout: CHECK_TIME[getRandomInteger(0, CHECK_TIME.length - 1)],
      features: getRandomArray(FEATURES_LIST),
      description: DESCRIPTION_LIST[getRandomInteger(0, DESCRIPTION_LIST.length - 1)],
      photos: getRandomArray(PHOTOS_LIST),
    },
    location: {
      lat: LAT,
      lng: LNG,
    },
  };

  return objTemplate;
}

export {createObj};
