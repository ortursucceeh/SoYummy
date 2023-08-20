import { randomId } from './functions';

export function formatInstructions(instructions) {
  return instructions
    .slice(0, -1)
    .replaceAll('\r', '')
    .split('\n')
    .filter(str => str.length >= 5);
}

export const initialOwnRecipe = {
  title: '',
  category: 'Breakfast',
  description: '',
  instructions: '',
  time: 0,
  ingredients: [
    { _id: randomId(), id: null, measure: null },
    { _id: randomId(), id: null, measure: null },
    { _id: randomId(), id: null, measure: null },
  ],
  fullImage: null,
};
