import Character from './Character.js';

export default class Magican extends Character {
  constructor(name, type = 'Magican') {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }

  setStoned(x) {
    this.attack = this.attack - log2(x) * 5;
  }

  getAttack() {
    return this.attack;
  }

  setAttack(x) {
    this.attack = (this.attack / 100) * (x-1 * 10);
  }

}

const char = new Magican();
char.setAttack(6);

