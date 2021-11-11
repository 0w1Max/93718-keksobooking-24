import {getRandomInteger} from './utils.js';

// Элемент в разметке, куда будем добавлять сгенерированное объявление
const container = document.querySelector('#map-canvas');
// Шаблон объявления
const cards = document.querySelector('#card').content;

// Функция, которая генерирует элементы для разметки
function addElement (obj) {
  // Клонируем шаблон с дочерними элементами
  const newCards = cards.cloneNode(true);
  const popup = newCards.querySelector('.popup');
  // Получаем рандомный индекс массива с объектами
  const randomObj = obj[getRandomInteger(0, obj.length - 1)];

  // Функция, которая добавляет фотографии на страницу
  function addPhoto () {
    const popupPhotos = popup.querySelector('.popup__photos');

    popupPhotos.innerHTML = '';

    randomObj.offer.photos.forEach((photos) => {
      const createElementPhoto = document.createElement('img');

      createElementPhoto.classList.add('popup__photo');
      createElementPhoto.width = 45;
      createElementPhoto.height = 40;
      createElementPhoto.src = photos;

      popupPhotos.appendChild(createElementPhoto);
    });
  }

  // Функция, которая добавляет удобства на страницу
  function addFeatures () {
    const featuresList = popup.querySelector('.popup__features');

    featuresList.innerHTML = '';

    randomObj.offer.features.forEach((feature) => {
      const createElementFeature = document.createElement('li');
      const featureClass = 'popup__feature';
      const newFeatureClass = `popup__feature--${feature}`;
      createElementFeature.classList.add(featureClass);
      createElementFeature.classList.add(newFeatureClass);

      featuresList.appendChild(createElementFeature);
    });
  }

  // Функция, которая определяет тип жилья
  function addTypeItem (object) {
    switch (object.offer.type) {
      case 'flat':
        popup.querySelector('.popup__type').textContent = 'Квартира';
        break;
      case 'bungalow':
        popup.querySelector('.popup__type').textContent = 'Бунгало';
        break;
      case 'house':
        popup.querySelector('.popup__type').textContent = 'Дом';
        break;
      case 'palace':
        popup.querySelector('.popup__type').textContent = 'Дворец';
        break;
      case 'hotel':
        popup.querySelector('.popup__type').textContent = 'Отель';
        break;
    }
  }

  // Функция, которая добавляет элементы на страницу
  obj.forEach ((object) => {
    popup.querySelector('.popup__avatar').src = randomObj.author.avatar;
    popup.querySelector('.popup__title').textContent = object.offer.title;
    popup.querySelector('.popup__text--address').textContent = object.offer.address;
    popup.querySelector('.popup__text--price').textContent = `${object .offer.price} ₽/ночь`;
    popup.querySelector('.popup__text--capacity').textContent = `${object.offer.rooms} комнаты для
    ${object.offer.guests} гостей`;
    popup.querySelector('.popup__text--time').textContent = `Заезд после ${object.offer.checkin},
    выезд до ${object.offer.checkout}`;

    popup.querySelector('.popup__description').textContent = object.offer.description;
    // Скрываем блок, если отсутствует описание
    if (!object.offer.description) {
      popup.querySelector('.popup__description').style.display = 'none';
    }

    addTypeItem(object);
    addFeatures();
    addPhoto();
  });

  //Добавляем новую карточку объявления в разметку
  container.appendChild(newCards);
}

export {addElement};
