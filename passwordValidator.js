/* #hexlet #oop #classes #configuration

Валидация - процесс проверки корректности данных. В вебе происходит всегда
при отправке форм,например, регистрация на многих сайтах проверяет
корректность введённого емейла,его уникальность (что такого пользователя ещё нет).

Каждый тип валидации в таких системах обычно представлен классом-валидатором,
который принимает на вход опции и предоставляет интерфейс в виде функции validate().
Эта функция принимает на вход то, что проверяется (валидируется) и возвращает массив
или объект с ошибками. Если объект пустой, значит ошибок нет.

Этот валидатор поддерживает следующие опции:

minLength (по умолчанию 8) - минимальная длина пароля
containNumbers (по умолчанию true) - требование содержать хотя бы одну цифру
Опции передаются одним объектом в конструктор валидатора.

const validator = new PasswordValidator({ containNumbers: false });
validator.validate('qwertyui'); // {}
validator.validate('qwerty'); // { minLength: 'too small' }

*/

const hasNumber = (string) => string.search(/\d/) !== -1;

class PasswordValidator {
  constructor(options) {
    const defaultOptions = {
      minLength: 8,
      containNumbers: true,
    };

    const obj = { ...defaultOptions, ...options };

    this.minLength = obj.minLength;
    this.containNumbers = obj.containNumbers;
  }

  validate(password) {
    if (password.length < this.minLength && !hasNumber(password) && this.containNumbers) {
      return { minLength: 'too small', containNumbers: 'should contain at least one number' };
    }

    if (password.length < this.minLength) {
      return { minLength: 'too small' };
    }

    if (!hasNumber(password) && this.containNumbers) {
      return { containNumbers: 'should contain at least one number' };
    }

    return {};
  }
}
