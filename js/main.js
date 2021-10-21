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

getRandomInteger(1,1000);
