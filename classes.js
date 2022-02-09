/* #hexlet #oop #classes #lodash

Реализуйте и экспортируйте по умолчанию класс Cart, представляющий из себя покупательскую корзину. Интерфейс:

addItem(item, count) – добавляет в корзину товары и их количество. Товар это объект у которого два свойства: name – имя и price – стоимость.
getItems – возвращает товары в формате [{ item, count }, { item, count }, ...]
getCost – возвращает стоимость корзины. Общая стоимость корзины высчитывается как стоимость всех добавленных товаров с учетом их количества.
getCount – возвращает количество товаров в корзине

const cart = new Cart();
cart.addItem({ name: 'car', price: 3 }, 5);
cart.addItem({ name: 'house', price: 10 }, 2);
cart.getItems().length; // 2
cart.getCost(); // 35

*/

import _ from 'lodash';

class Cart {
  constructor() {
    this.items = [];
  }

  addItem(item, count) {
    const items = this.getItems();
    items.push({ item, count });
  }

  getItems() {
    return this.items;
  }

  getCost() {
    const elements = this.getItems();
    return elements.map((el) => el.item.price * el.count).reduce((acc, el) => acc + el, 0);
  }

  getCount() {
    const elements = this.getItems();
    return elements.reduce((acc, el) => acc + el.count, 0);
  }
}
