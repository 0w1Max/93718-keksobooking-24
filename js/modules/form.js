
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE_LENGTH = 1000000;

const MIN_TYPE_PRICE = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

const titleInput = document.querySelector('#title');
const priceInput = document.querySelector('#price');
const typeItems = document.querySelectorAll('#type');

// Проверяем длину введённого заголовка
titleInput.addEventListener('input', () => {
  const valueLength = titleInput.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Слишком короткий заголовок! Ещё ${MIN_TITLE_LENGTH - valueLength} симв.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Удалите лишние ${valueLength - MAX_TITLE_LENGTH} симв.`);
  } else {
    titleInput.setCustomValidity('');
  }

  titleInput.reportValidity();
});

// Просматриваем коллекцию всех типов жилья
typeItems.forEach((typeItem) => {
  // При выборе типа меняем placeholder на минимальную цену у соответствующего типа жилья
  typeItem.addEventListener('change', (evt) => {
    priceInput.placeholder = MIN_TYPE_PRICE[evt.target.value];

    // Создаём атрибут минимальной цены
    priceInput.setAttribute('min', priceInput.placeholder);
  });
});

// Проверяем введённую цену за ночь
priceInput.addEventListener('input', () => {
  const inputNumber = priceInput.value;

  if (inputNumber < +priceInput.placeholder) {
    priceInput.setCustomValidity('Слишком низкая цена для этого типа жилья!');
  } else if (inputNumber > MAX_PRICE_LENGTH) {
    priceInput.setCustomValidity('Слишком высокая цена для этого типа жилья!');
  } else {
    priceInput.setCustomValidity('');
  }

  priceInput.reportValidity();
});
