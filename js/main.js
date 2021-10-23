import {ARRAY_LENGTH, AVATAR_LIST} from './initial.js';
import {createObj} from './data.js';

const OBJECTS = [];

// Добавляем объекты в массив
for (let index = 0; index < ARRAY_LENGTH; index++) {
  const newObj = createObj();
  OBJECTS.push(newObj);

  // Добавляем аватарки в объект
  OBJECTS[index].author.avatar = AVATAR_LIST[index];
}
