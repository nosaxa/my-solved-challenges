/* #hexlet #objects #merge #lodash

Реализуйте функцию, которая заполняет объект данными из другого объекта
по разрешенному списку ключей. Параметры:

- Исходный объект
- Список ключей которые нужно заменить
- Данные, которые нужно сливать в исходный объект

В случае, когда список ключей пустой, нужно сливать все данные полностью.

const company = {
  name: null,
  state: 'moderating',
};

const data = {
  name: 'Hexlet',
  state: 'published',
};

Вызовы ниже нужно рассматривать как независимые

fill(company, ['name'], data);
// {
//   name: 'Hexlet',
//   state: 'moderating',
// }

fill(company, [], data);
// {
//   name: 'Hexlet',
//   state: 'published',
// }

*/

import _ from 'lodash';

// 1.
const fill = (obj1, keys, obj2) => {
  const result = {};
  if (keys.length < 1) return Object.assign(obj1, obj2);
  for (const key of keys) {
    if (_.has(obj2, key)) {
      result[key] = obj2[key];
    }
  }
  return Object.assign(obj1, result);
};

// 2.
const fill = (object, keys, data) => {
  const filteredData = keys.length > 0 ? _.pick(data, keys) : data;
  Object.assign(object, filteredData);
};
