/* #hexlet #arrays #loops #lodash

Реализуйте и экспортируйте по умолчанию функцию, принимающую на вход два массива
и возвращающую количество общих уникальных значений в обоих массивах. 

Для получения массива без повторяющихся элементов, используйте uniq из библиотеки lodash.
В целях обучения и прокачки, решите это упражнение с помощью вложенных циклов.

// Общие повторяющиеся элементы: 1, 3, 2
getSameCount([1, 3, 2, 2], [3, 1, 1, 2, 5]); // 3
 
// Общие повторяющиеся элементы: 4
getSameCount([1, 4, 4], [4, 8, 4]); // 1
 
// Общие повторяющиеся элементы: 1, 10
getSameCount([1, 10, 3], [10, 100, 35, 1]); // 2
 
// Нет элементов
getSameCount([], []); // 0

*/

import _ from 'lodash';

// 1.
const getSameCount = (coll1, coll2) => {
  let count = 0;
  const uniqColl1 = _.uniq(coll1);
  const uniqColl2 = _.uniq(coll2);

  for (let item1 of uniqColl1) {
    for (let item2 of uniqColl2) {
      if (item1 === item2) count += 1;
    }
  }
  return count;
};

// 2.
const getSameCount = (arr1, arr2) => {
  const uniqItems = _.uniq(arr1);
  let count = 0;
  for (let item of uniqItems) {
    if (_.uniq(arr2).includes(item)) count += 1;
  }
  return count;
};
