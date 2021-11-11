
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE_HOUSING = 1000000;

const PRICE_VALIDATION = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

const titleInput = document.querySelector('#title');
const priceInput = document.querySelector('#price');
const typeItems = document.querySelectorAll('#type');
const roomSelect= document.querySelector('#room_number');
const guestSelect = document.querySelector('#capacity');
const guestOptions = guestSelect.querySelectorAll('option');

// Выбираем количество мест для одного гостя по-умолчанию
guestOptions[2].selected = true;
// Функция, которая определяет число гостей при определённом количестве комнат
function onSelectChange (evt) {
  const targetValue = +evt.target.value;

  for (let index = 0; index < guestOptions.length; index++) {
    guestOptions[index].disabled = true;

    if (targetValue === 100) {
      guestOptions[3].disabled = false;
      guestOptions[3].selected = true;
    } else if (targetValue === guestOptions[index].value || guestOptions[index].value < targetValue) {
      guestOptions[index - 1].disabled = false;
      guestOptions[2].selected = true;
    }
  }
}

// Создаём событие при выборе количества комнат
roomSelect.addEventListener('change', onSelectChange);

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

// Создаём пееременную для минимальной цены
let newMinPrice = 0;

// Функция, которая определяет минимальную цену при выборе определённого типа жилья
function onPriceChange (evt) {
  const targetValue = evt.target.value;
  newMinPrice = PRICE_VALIDATION[targetValue];
  priceInput.placeholder = PRICE_VALIDATION[targetValue];

  // Создаём атрибут минимальной цены
  priceInput.setAttribute('min', newMinPrice);
}

// Создаём событие при выборе типа жилья
typeItems.forEach((typeItem) => {
  typeItem.addEventListener('change', onPriceChange);
});

// Проверяем введённую цену за ночь
priceInput.addEventListener('input', () => {
  const inputNumber = priceInput.value;

  if (inputNumber < newMinPrice) {
    priceInput.setCustomValidity(`Минимальная цена для этого типа жилья: ${newMinPrice}`);
  } else if (inputNumber > MAX_PRICE_HOUSING) {
    priceInput.setCustomValidity(`Слишком высокая цена! Максимальная цена: ${MAX_PRICE_HOUSING}`);
  } else {
    priceInput.setCustomValidity('');
  }

  priceInput.reportValidity();
});
