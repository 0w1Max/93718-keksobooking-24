import {AVATAR_LIST, AVATAR_NUMBER} from './data.js';

// Получаем случайное число с плавающей точкой из заданного интервала (min, max)
function getRandomNumber (min, max, fix = 0) {
  const randomNumber = Math.random() * (max - min) + min;

  if (min < 0 || min >= max) {
    return 'Указан неверный диапазон';
  }

  return Number(randomNumber).toFixed(fix);
}

// Получаем случайное целое положительное число из заданного интервала (min, max)
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

// Генерируем аватарки и добавляем в массив AVATAR_LIST
for (let index = 0; index < AVATAR_NUMBER; index++) {
  if (index < 9) {
    AVATAR_LIST.push(`img/avatars/user0${index + 1}.png`);
  } else {
    AVATAR_LIST.push(`img/avatars/user${index + 1}.png`);
  }
}

export {getRandomNumber, getRandomInteger, getRandomArray};
