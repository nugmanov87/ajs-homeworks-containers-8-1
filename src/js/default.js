/**
 * Создание дефолтного персонажа
 *
 * @param {string} name - Имя персонажа
 * @param {string} type - Тип персонажа
 *
 * @throws Ошибка при неверном введении имени или типа персонажа
 */
export default class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.level = 1;
  }
}
