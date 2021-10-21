// Задание 2.15. Нужно больше функций
// Источники
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://ru.stackoverflow.com/q/1294882

function getRandomNumber (min, max, fix = 0) {
  const randomNumber = Math.random() * (max - min) + min;

  if (min < 0 || min >= max) {
    return 'Указан неверный диапазон';
  }

  return Number(randomNumber).toFixed(fix);
}

getRandomNumber(2, 10, 4);
getRandomNumber(1.1, 1.2, 1);
getRandomNumber(-2, 10, 1);
getRandomNumber(22, 8, 1);
getRandomNumber(320, 320, 4);


// Задание 4.9. Больше деталей

// author, объект — описывает автора. Содержит одно поле:
//// avatar, строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это число от 1 до 10. Перед однозначными числами ставится 0. Например, 01, 02...10. Адреса изображений не повторяются.

// offer, объект — содержит информацию об объявлении. Состоит из полей:
//// title, строка — заголовок предложения. Придумайте самостоятельно.
//// address, строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.lat}}, {{location.lng}}.
//// price, число — стоимость. Случайное целое положительное число.
//// type, строка — одно из пяти фиксированных значений: palace, flat, house, bungalow или hotel.
//// rooms, число — количество комнат. Случайное целое положительное число.
//// guests, число — количество гостей, которое можно разместить. Случайное целое положительное число.
//// checkin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
//// checkout, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
//// features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.
//// description, строка — описание помещения. Придумайте самостоятельно.
//// photos, массив строк — массив случайной длины из значений: https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg.

// location, объект — местоположение в виде географических координат. Состоит из двух полей:
//// lat, число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000.
//// lng, число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000.

// 1. Добавить цикл, который добавляет аватарки в массив.
// 2. Объявить данные для объекта offer.
// 3. Объявить данные для объекта location.
// 4. Создать объекты author, offter, location с данными.


// Получаем случайное целое положительное число
const getRandomInteger = (min, max) => Math.floor(getRandomNumber(min, max));

// Получаем массив случайной длины
function getRandomArray (array) {
  const newArray = [];
  const maxLength = array.length;
  const arrayLength = getRandomInteger(1, maxLength);

  while (newArray.length < arrayLength) {
    const indexOfEl = getRandomInteger(0, maxLength - 1);
    const el = array[indexOfEl];

    if (!newArray.includes(el)) {
      newArray.push(el);
    }
  }
  return newArray;
}

// Получаем аватарки
const AVATAR_LIST = [];
const AVATAR_NUMBER = 10;
for (let index = 0; index < AVATAR_NUMBER; index++) {
  if (index < 9) {
    AVATAR_LIST.push(`img/avatars/user0${index + 1}.png`);
  } else {
    AVATAR_LIST.push(`img/avatars/user${index + 1}.png`);
  }
}
const AVATAR = AVATAR_LIST[getRandomInteger(0, AVATAR_LIST.length - 1)];

// Заголовок объявления
const TITLE_LIST = [
  'Новое объявление',
  'Новое объявление 2',
  'Новое объявление 3',
  'Новое объявление 4',
  'Новое объявление 5',
];
const TITLE = TITLE_LIST[getRandomInteger(0, TITLE_LIST.length - 1)];

// Описание объявления
const DESCRIPTION_LIST = [
  'Новое описание',
  'Новое описание 2',
  'Новое описание 3',
  'Новое описание 4',
  'Новое описание 5',
];
const DESCRIPTION = DESCRIPTION_LIST[getRandomInteger(0, DESCRIPTION_LIST.length - 1)];

// Цена
const PRICE = getRandomInteger(1000, 30000);

// Тип жилья
const TYPE_LIST = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const TYPE = TYPE_LIST[getRandomInteger(0, TYPE_LIST.length - 1)];

// Количество комнат
const ROOMS = getRandomInteger(1, 4);

// Количество мест
const GUESTS = getRandomInteger(0, 3);

// Время заезда и выезда
const CHECK_TIME = ['12:00', '13:00', '14:00'];
const CHECKIN = CHECK_TIME[getRandomInteger(0, CHECK_TIME.length - 1)];
const CHECKOUT = CHECK_TIME[getRandomInteger(0, CHECK_TIME.length - 1)];

// Удобства
const FEATURES_LIST = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const FEATURES = getRandomArray(FEATURES_LIST);

// Фотографии жилья
const PHOTOS_LIST = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const PHOTOS = getRandomArray(PHOTOS_LIST);

// Координаты
const LAT = getRandomNumber(35.65000, 35.70000, 5);
const LNG = getRandomNumber(139.70000, 139.80000, 5);
const ADDRESS = `${LAT}, ${LNG}`;

const author = {
  avatar: AVATAR,
};

const offer = {
  title: TITLE,
  address: ADDRESS,
  price: PRICE,
  type: TYPE,
  rooms: ROOMS,
  guests: GUESTS,
  checkin: CHECKIN,
  checkout: CHECKOUT,
  features: FEATURES,
  description: DESCRIPTION,
  photos: PHOTOS,
  location: {
    lat: LAT,
    lng: LNG,
  },
};

author;
offer;
