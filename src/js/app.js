/* eslint-disable max-classes-per-file */

import Character from './default';

export class Zombie extends Character {
  constructor(name) {
    super(name);
    this.type = 'Zombie';
    this.attack = 10;
    this.defence = 40;
  }
}

export class Team {
  constructor() {
    this.members = new Set();
  }
  /* Добавление персонажа */

  add(character) {
    if (this.members.has(character)) throw new Error('Данный персонаж уже существует');
    this.members.add(character);
  }

  /* Добавление произвольного количества персонажей */

  addAll(...characters) {
    for (const item of characters) {
      this.members.add(item);
    }
  }

  /* Конвертация Set в массив персонажей */

  toArray() {
    return Array.from(this.members);
  }
}

const team = new Team();
console.log(team);
