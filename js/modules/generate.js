import {getRandomInteger} from './utils.js';

// Элемент в разметке, куда будем добавлять сгенерированное объявление
const CONTAINER = document.querySelector('#map-canvas');
// Шаблон объявления
const CARDS = document.querySelector('#card').content;

// Функция, которая генерирует элементы для разметки
function addElement (obj) {
  // Клонируем шаблон с дочерними элементами
  const newCards = CARDS.cloneNode(true);
  const popup = newCards.querySelector('.popup');
  // Получаем рандомный индекс массива с объектами
  const randomObj = obj[getRandomInteger(0, obj.length - 1)];
}

export {addElement};
