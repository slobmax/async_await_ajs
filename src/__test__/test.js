import GameSavingLoader from '../gamesavingloader';

test('Проверка GameSavingLoader', async () => {
  expect.assertions(1);
  const recivied = await GameSavingLoader();
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };

  expect(recivied).toEqual(expected);
});
