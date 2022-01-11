/* #hexlet #objects #lodash

Реализуйте и экспортируйте по умолчанию функцию, которая сравнивает два объекта
и возвращает результат сравнения в виде объекта. Ключами результирующего объекта будут
все ключи из двух входящих объектов, а значением строкас описанием отличий: added, deleted, changed или unchanged.

Возможные значения:

added — ключ отсутствовал в первом объекте, но был добавлен во второй
deleted — ключ был в первом объекте, но отсутствует во втором
changed — ключ присутствовал и в первом и во втором объектах, но значения отличаются
unchanged — ключ присутствовал и в первом и во втором объектах с одинаковыми значениями 

genDiff(
  { one: 'eon', two: 'two', four: true },
  { two: 'own', zero: 4, four: true },
);

// {
//   one: 'deleted',
//   two: 'changed',
//   four: 'unchanged',
//   zero: 'added',
// }

*/

import _ from 'lodash';

// 1.
const genDiff = (obj1, obj2) => {
  const diff = {};
  const keys = Object.keys(obj1);
  const omitted = _.omit(obj2, keys);

  for (const key of keys) {
    if (obj2[key] !== undefined && obj1[key] === obj2[key]) {
      diff[key] = 'unchanged';
    }
    if (obj2[key] !== undefined && obj1[key] !== obj2[key]) {
      diff[key] = 'changed';
    }
    if (obj2[key] === undefined) {
      diff[key] = 'deleted';
    }
  }
  Object.keys(omitted).forEach((item) => (diff[item] = 'added'));

  return diff;
};

// 2.
const genDiff = (data1, data2) => {
  const keys1 = _.keys(data1);
  const keys2 = _.keys(data2);
  const keys = _.union(keys1, keys2);

  const result = {};
  for (const key of keys) {
    if (!_.has(data1, key)) {
      result[key] = 'added';
    } else if (!_.has(data2, key)) {
      result[key] = 'deleted';
    } else if (data1[key] !== data2[key]) {
      result[key] = 'changed';
    } else {
      result[key] = 'unchanged';
    }
  }

  return result;
};
