/*  #hexlet #oop #classes #valueObjects

В данном упражнении нам предстоит реализовать класс-обёртку над стандартным классом URL.
Наш класс будет предоставлять другие методы и немного расширять возможности стандартного.

Url.js
Реализуйте и экспортируйте по умолчанию класс для работы с HTTP-адресом. Класс должен содержать конструктор и методы:

конструктор — принимает на вход HTTP-адрес в виде строки
getScheme() — возвращает протокол передачи данных (без двоеточия)
getHostName() — возвращает имя хоста
getQueryParams() — возвращает параметры запроса в виде пар ключ-значение объекта
getQueryParam() — получает значение параметра запроса по имени. Если параметр с переданным именем не существует,
метод возвращает значение заданное вторым параметром (по умолчанию равно null)
equals(url) — принимает объект класса Url и возвращает результат сравнения с текущим объектом — true или false

const url = new Url('http://yandex.ru:80?key=value&key2=value2');
url.getScheme(); // 'http'
url.getHostName(); // 'yandex.ru'
url.getQueryParams();
// {
//   key: 'value',
//   key2: 'value2',
// };
url.getQueryParam('key'); // 'value'
// второй параметр - значение по умолчанию
url.getQueryParam('key2', 'lala'); // 'value2'
url.getQueryParam('new', 'ehu'); // 'ehu'
url.getQueryParam('new'); // null
url.equals(new Url('http://yandex.ru:80?key=value&key2=value2')); // true
url.equals(new Url('http://yandex.ru:80?key=value')); // false

*/

// 1.

class Url {
  constructor(queryString) {
    this.urlData = new URL(queryString);
  }

  getScheme() {
    return this.urlData.protocol.slice(0, -1);
  }

  getHostName() {
    return this.urlData.hostname;
  }

  getQueryParams() {
    const entries = this.urlData.searchParams.entries();
    return Object.fromEntries(entries);
  }

  getQueryParam(key, defaultValue = null) {
    const parameters = this.getQueryParams();
    if (parameters[key] !== undefined) return parameters[key];
    return defaultValue;
  }

  equals(url) {
    return this.urlData.href === url.urlData.href;
  }
}

// 2.

class Url {
  constructor(url) {
    this.url = new URL(url);
    this.url.scheme = this.url.protocol.slice(0, -1);
    this.url.queryParams = Object.fromEntries(this.url.searchParams);
  }

  getScheme() {
    return this.url.scheme;
  }

  getHostName() {
    return this.url.hostname;
  }

  getQueryParams() {
    return this.url.queryParams;
  }

  getQueryParam(key, defaultValue = null) {
    return this.url.searchParams.has(key) ? this.url.searchParams.get(key) : defaultValue;
  }

  toString() {
    return this.url.toString();
  }

  equals(url) {
    return this.toString() === url.toString();
  }
}
