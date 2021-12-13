/* #hexlet #functions #lodash

Реализуйте и экспортируйте по умолчанию функцию, которая принимает список пользователей и возвращает объект,
где ключ - это год рождения, а значение - это количество мужчин, родившихся в этот год. 

const users = [
  { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
  { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
  { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
  { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
  { name: 'Jon', gender: 'male', birthday: '1980-11-03' },
  { name: 'Robb', gender: 'male', birthday: '1980-05-14' },
  { name: 'Tisha', gender: 'female', birthday: '2012-11-03' },
  { name: 'Rick', gender: 'male', birthday: '2012-11-03' },
  { name: 'Joffrey', gender: 'male', birthday: '1999-11-03' },
  { name: 'Edd', gender: 'male', birthday: '1973-11-03' },
];

getMenCountByYear(users);

 {
   1973: 3,
   1963: 1,
   1980: 2,
   2012: 1,
   1999: 1,
 };

*/

import _ from "lodash";

// 1.
const fn = (acc, year) => {
  if (!_.has(acc, year)) {
    acc[year] = 1;
  } else {
    acc[year] += 1;
  }
  return acc;
};

const getMenCountByYear = (users) => {
  const result = users
    .filter((user) => user.gender === "male")
    .map(({ birthday }) => birthday.slice(0, 4))
    .reduce(fn, {});
  return result;
};

// 2.
const getMenCountByYear = (users) => {
  const men = users.filter(({ gender }) => gender === "male");

  const years = men.map(({ birthday }) => birthday.slice(0, 4));

  return years.reduce((acc, year) => {
    const count = _.get(acc, year, 0) + 1;
    return { ...acc, [year]: count };
  }, {});
};
