
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
const roomValues = document.querySelectorAll('#room_number');
const numberOfGuests = document.querySelector('#capacity');

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

// Проверяем соответствие количества комнат и колечества мест
roomValues.forEach((roomValue) => {
  numberOfGuests.innerHTML = '<option value="1">для 1 гостя</option>';
  // В зависимости от выбранного количества комнат, разрешаем определённое число мест
  roomValue.addEventListener('change', (evt) => {
    const targetValue = +evt.target.value;
    if (targetValue === 1) {
      numberOfGuests.innerHTML = '<option value="1">для 1 гостя</option>';
    } else if (targetValue === 2) {
      numberOfGuests.innerHTML = `<option value="2">для 2 гостей</option>
      <option value="1">для 1 гостя</option>`;
    } else if (targetValue === 3) {
      numberOfGuests.innerHTML = `<option value="3" selected>для 3 гостей</option>
      <option value="2">для 2 гостей</option>
      <option value="1">для 1 гостя</option>`;
    } else if (targetValue === 100) {
      numberOfGuests.innerHTML = '<option value="0">не для гостей</option>';
    }
  });
});
