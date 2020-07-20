import Character from '../classes/Char';

test('Создание нового персонажа Zombie', () => {
  const received = new Character('Doc', 'Zombie');
  const expected = {
    name: 'Doc',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defense: 10,
  };
  expect(received).toEqual(expected);
});

test('Создание нового персонажа Swordsman', () => {
  const received = new Character('Doc', 'Swordsman');
  const expected = {
    name: 'Doc',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defense: 10,
  };
  expect(received).toEqual(expected);
});

test('Создание нового персонажа Magician', () => {
  const received = new Character('Doc', 'Magician');
  const expected = {
    name: 'Doc',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defense: 40,
  };
  expect(received).toEqual(expected);
});

test('Создание нового персонажа Undead', () => {
  const received = new Character('Doc', 'Undead');
  const expected = {
    name: 'Doc',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defense: 25,
  };
  expect(received).toEqual(expected);
});

test('Создание нового персонажа Daemon', () => {
  const received = new Character('Doc', 'Daemon');
  const expected = {
    name: 'Doc',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defense: 40,
  };
  expect(received).toEqual(expected);
});

test('Создание нового персонажа Bowman', () => {
  const received = new Character('Doc', 'Bowman');
  const expected = {
    name: 'Doc',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defense: 25,
  };
  expect(received).toEqual(expected);
});

test('Ошибка в type', () => {
  const errType = { name: 'Doc', type: 'Bow' };
  expect(() => {
    const err = new Character(errType);
    return err;
  }).toThrow();
});

test('Ошибка в name', () => {
  const errName = { name: 'Do', type: 'Bowman' };
  expect(() => {
    const err = new Character(errName);
    return err;
  }).toThrow();
});

test('Ошибка в name', () => {
  const errName = { name: 1, type: 'Bowman' };
  expect(() => {
    const err = new Character(errName);
    return err;
  }).toThrow();
});

test('Ошибка в name', () => {
  const errName = { name: 'DoctorDulitle', type: 'Bowman' };
  expect(() => {
    const err = new Character(errName);
    return err;
  }).toThrow();
});

test('Ошибка в type', () => {
  expect(() => {
    const err = new Character('Doc', 'Err');
    return err;
  }).toThrow();
});

test('Проверка damage при health > 0', () => {
  const undead = new Character('Doc', 'Undead');
  undead.damage(10);
  expect(92.5).toBeCloseTo(undead.health);
});

test('Проверка damage при health < 0', () => {
  const undead = new Character('Doc', 'Undead');
  undead.health = -1;
  expect(() => undead.damage(10)).toThrow();
});
