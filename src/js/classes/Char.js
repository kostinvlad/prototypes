export default class Character {
  constructor(name, type) {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (name.length < 2 || name.length > 10 || typeof (name) !== 'string') {
      throw new Error('Ошибка в name');
    }

    if (!types.includes(type)) {
      throw new Error('Ошибка в type');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = Character.prototype[type].attack;
    this.defense = Character.prototype[type].defense;
  }
}

Character.prototype = {
  Bowman: {
    attack: 25,
    defense: 25,
  },
  Swordsman: {
    attack: 40,
    defense: 10,
  },
  Magician: {
    attack: 10,
    defense: 40,
  },
  Undead: {
    attack: 25,
    defense: 25,
  },
  Zombie: {
    attack: 40,
    defense: 10,
  },
  Daemon: {
    attack: 10,
    defense: 40,
  },

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defense / 100);
    } else {
      throw new Error('Цель мертва');
    }
  },
};
