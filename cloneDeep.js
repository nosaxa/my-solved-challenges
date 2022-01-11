/* #hexlet #objects #recursion #lodash

Реализуйте и экспортируйте по умолчанию функцию, которая выполняет глубокое копирование объектов.
Для реализации этой задачи нельзя использовать функцию cloneDeep() библиотеки lodash.

result имеет такую же структуру, как и data
const result = cloneDeep(data);

Но внутри другие объекты
result.key2 !== data.key2; // true
result.key2.innerKey !== data.key2.innerKey; // true 

*/

import isObject from 'lodash/isObject';

const data = {
  key: 'value',
  key2: {
    key: 'innerValue',
    innerKey: {
      anotherKey: 'anotherValue',
    },
  },
};

// 1.
const cloneDeep = (object) => {
  const result = {};
  const entries = Object.entries(object);
  for (const [key, value] of entries) {
    result[key] = isObject(value) ? cloneDeep(value) : value;
  }

  return result;
};
