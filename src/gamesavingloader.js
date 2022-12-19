import json from './parser';
import read from './reader';
import GameSaving from './gamesaving';

export default async function GameSavingLoader() {
  const data = await read();
  const value = await json(data);
  const saving = new GameSaving(JSON.parse(value));
  return saving;
}
