import {ARRAY_LENGTH, AVATAR_LIST} from './modules/data.js';
import {createObj} from './modules/initial.js';
import {addElement} from './modules/generate.js';
import './modules/form.js';

const OBJECTS = [];

// Добавляем объекты в массив
for (let index = 0; index < ARRAY_LENGTH; index++) {
  const newObj = createObj();
  OBJECTS.push(newObj);

  // Добавляем аватарки в объект
  OBJECTS[index].author.avatar = AVATAR_LIST[index];
}

addElement(OBJECTS);
