import Character from '../classes/Char';
import Bowman from '../bowman';
import Daemon from '../daemon';
import Magician from '../magician';
import Zombie from '../zombie';
import Undead from '../undead';
import Swordsman from '../swordsman';

test('Наследуется от Character', () => {
  expect(new Zombie('One', 'Zombie')).toBeInstanceOf(Character);
});

test('Наследуется от Character', () => {
  expect(new Undead('One', 'Undead')).toBeInstanceOf(Character);
});

test('Создание нового персонажа Undead', () => {
  const received = new Zombie('One', 'Zombie');
  const expected = {
    name: 'One',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});

test('Создание нового персонажа Bowman', () => {
  const received = new Bowman('One', 'Bowman');
  const expected = {
    name: 'One',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});

test('Создание нового персонажа Undead', () => {
  const received = new Undead('One', 'Undead');
  const expected = {
    name: 'One',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});

test('Создание нового персонажа Swordsman', () => {
  const received = new Swordsman('One', 'Swordsman');
  const expected = {
    name: 'One',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});

test('Создание нового персонажа Magician', () => {
  const received = new Magician('One', 'Magician');
  const expected = {
    name: 'One',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});

test('Создание нового персонажа Daemon', () => {
  const received = new Daemon('One', 'Daemon');
  const expected = {
    name: 'One',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});

test('Тип Character', () => {
  const received = typeof Character;
  const expected = 'function';
  expect(received).toBe(expected);
});

test('Проверка свойств', () => {
  const magic = new Magician('One', 'Magician');
  const received = magic.attack;
  const expected = 10;
  expect(received).toBe(expected);
});

test('Ошибка в name', () => {
  const errName = { name: 'A', type: 'Bowman' };
  expect(() => {
    const bow = new Character(errName);
    return bow;
  }).toThrow();
});

test('Ошибка в name', () => {
  const errName = { name: 1, type: 'Bowman' };
  expect(() => {
    const bow = new Character(errName);
    return bow;
  }).toThrow();
});

test('Ошибка в name', () => {
  const errName = { name: 'OneTwoThreeFour', type: 'Bowman' };
  expect(() => {
    const bow = new Character(errName);
    return bow;
  }).toThrow();
});

test('Ошибка в type', () => {
  const errType = { name: 'One', type: 'Bow' };
  expect(() => {
    const bow = new Character(errType);
    return bow;
  }).toThrow();
});

test('Проверка levelUp при health > 0', () => {
  const daemon = new Daemon('One', 'Daemon');
  daemon.levelUp();
  expect(2).toEqual(daemon.level);
});

test('Проверка levelUp при health < 0', () => {
  const swordsman = new Swordsman('One', 'Swordsman');
  swordsman.health = -1;
  expect(() => swordsman.levelUp()).toThrow();
});

test('Проверка damage при health > 0', () => {
  const undead = new Undead('One', 'Undead');
  undead.damage(10);
  expect(92.5).toBeCloseTo(undead.health);
});

test('Проверка damage при health < 0', () => {
  const magician = new Magician('One', 'Magician');
  magician.health = -1;
  expect(() => magician.damage(10)).toThrow();
});

test('Проверка type', () => {
  expect(() => {
    const undead = new Undead('One', 'Unreal');
    return undead;
  }).toThrow();
});
