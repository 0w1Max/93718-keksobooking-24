// Задание 2.15. Нужно больше функций
// Источники
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://ru.stackoverflow.com/q/1294882

function getRandomNumber (min, max, fix) {
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
