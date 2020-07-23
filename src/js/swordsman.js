import Character from './classes/Char';

export default class Swordsman extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}
