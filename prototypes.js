/* #hexlet #objects #oop #prototype

В программировании иногда приходится иметь дело с деньгами. В отличие от большинства
других значений, деньги могут существовать в разных валютах, которые конвертируются друг в друга
по определенным ставкам (они меняются со временем!). Из-за этого, часто, недостаточно
просто хранить количество денег, нужно хранить и их валюту.

Достаточно давно разработчики заметили, что работа с деньгами происходит
во всех проектах примерно одинаково. Это привело к созданию определенного подхода (шаблона проектирования)
при работе с деньгами. В этом задании мы частично реализуем его.

Money.js
Реализуйте и экспортируйте по умолчанию абстракцию "Деньги". Она знает о валюте денег,
позволяет их конвертировать в другие валюты, выполнять арифметические операции и форматировать вывод.
Список методов:

Money(value, currency = 'usd') – создает объект-деньги.
Money.prototype.getValue() – возвращает стоимость в виде числа
Money.prototype.exchangeTo(currency) – возвращает новый объект-деньги, где значение конвертировано в указанную валюту
Money.prototype.add(money) – возвращает новый объект-деньги, который представляет из себя сумму
исходных и переданных денег, в валюте исходных денег (внутри возможна конвертация если валюты не совпадают)
Money.prototype.format() – возвращает локализованное представление денег удобное для вывода

*/

function Money(value, currency = 'usd') {
  this.value = value;
  this.currency = currency;
}

Money.prototype.getValue = function getValue() {
  return this.value;
};

Money.prototype.exchangeTo = function exchangeTo(cur) {
  if (cur === 'eur') {
    const newValue = this.currency === 'usd' ? Number((this.value * 0.7).toFixed(2)) : this.value;
    const newCurrency = cur;
    return new Money(newValue, newCurrency);
  }

  if (cur === 'usd') {
    const newValue = this.currency === 'eur' ? Number((this.value * 1.2).toFixed(2)) : this.value;
    const newCurrency = cur;
    return new Money(newValue, newCurrency);
  }

  throw new Error('Wrong currency');
};

Money.prototype.add = function add(money) {
  const { currency } = this;

  if (money.currency === currency) {
    const newValue = this.value + money.getValue();
    return new Money(newValue, currency);
  }

  const newValue = this.value + money.exchangeTo(currency).getValue();
  return new Money(newValue, currency);
};

Money.prototype.format = function format() {
  const newVal = Number(this.value.toFixed(2));
  const symb = this.currency === 'eur' ? '€' : '$';
  return `${symb}${newVal.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
};
