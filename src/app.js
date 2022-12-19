import GameSavingLoader from './gamesavingloader';

(async () => {
  try {
    const saving = await GameSavingLoader();
    return saving;
  } catch (err) {
    throw new Error();
  }
})();
