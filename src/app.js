import GameSavingLoader from './gamesavingloader';

(async () => {
  try {
    const saving = await GameSavingLoader();
    /* eslint-disable */
    console.log(saving);    
  } catch (err) {
    throw new Error('Ошибка!');
  }
})();
