/* #hexlet #objects #reduce #lodash

Реализуйте и экспортируйте по умолчанию функцию для группировки объектов по заданному свойству.
Функция принимает аргументами массив объектов и название свойства для группировки. Она должна возвращать объект,
где ключ - это значение по заданному свойству, а значение - массив с данными, подходящими для группы.

const students = [
  { name: 'Tirion', class: 'B', mark: 3 },
  { name: 'Keit', class: 'A', mark: 3 },
  { name: 'Ramsey', class: 'A', mark: 4 },
];
 
groupBy([], ''); // {}

groupBy(students, 'mark');

{
  3: [
    { name: 'Tirion', class: 'B', mark: 3 },
    { name: 'Keit', class: 'A', mark: 3 },
  ],
  4: [
    { name: 'Ramsey', class: 'A', mark: 4 },
  ],
}

*/

import _ from 'lodash';

const students = [
  { name: 'Tirion', class: 'B', mark: 3 },
  { name: 'Keit', class: 'A', mark: 3 },
  { name: 'Ramsey', class: 'A', mark: 4 },
];

// 1.
const groupBy = (objects, key) => {
  const cb = (acc, object) => {
    if (!_.has(acc, object[key])) {
      acc[object[key]] = [];
    }
    acc[object[key]].push(object);
    return acc;
  };

  return objects.reduce(cb, {});
};

// 2.
const groupBy = (objects, key) =>
  objects.reduce((acc, object) => {
    // из каждого объекта берётся значение по ключу
    const groupName = object[key];
    // контейнером группы выступает массив
    const group = acc[groupName] ?? []; // Оператор нулевого слияния возвращает пустой массив, если в аккумуляторе ничего нет
    // возвращается новый объект аккумулятора
    return { ...acc, [groupName]: group.concat(object) }; // квадратные скобки нужны, чтобы указать имя группы в качестве ключа
    // старый аккумулятор деструктурируется, для текущей группы записывается новый массив с данными
  }, {});
