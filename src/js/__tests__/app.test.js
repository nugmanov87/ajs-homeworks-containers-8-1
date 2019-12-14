import { Zombie, Team } from '../app';

test('Проверка Team на добавление одного персонажа', () => {
  const zombie = new Zombie('Зомби', 'Zombie');
  const team = new Team();
  team.add(zombie);
  const received = team.toArray();
  const expected = [
    {
      name: 'Зомби',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  ];

  expect(received).toEqual(expected);
});

test('Проверка Team на добавление нескольких персонажей', () => {
  const zombie1 = new Zombie('Зомби', 'Zombie');
  const zombie2 = new Zombie('Зомби', 'Zombie');
  const team = new Team();
  team.addAll(zombie1, zombie2);
  const received = team.toArray();
  const expected = [
    {
      name: 'Зомби',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
    {
      name: 'Зомби',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  ];

  expect(received).toEqual(expected);
});

test('Проверка Team на добавление уже существующего персонажа', () => {
  const zombie = new Zombie('Зомби', 'Zombie');
  const team = new Team();
  team.add(zombie);

  expect(() => {
    team.add(zombie);
  }).toThrow();
});
