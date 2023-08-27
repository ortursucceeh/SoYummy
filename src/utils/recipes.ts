import { AddRecipeType } from 'src/types/Recipe';
import { randomId } from './functions';

export const formatInstructions = (instructions: string): string[] => {
  return instructions
    .slice(0, -1)
    .replaceAll('\r', '')
    .split('\n')
    .filter(str => str.length >= 5);
};

export const initialOwnRecipe: AddRecipeType = {
  title: '',
  category: 'Breakfast',
  description: '',
  instructions: '',
  time: '0',
  ingredients: [
    { _id: randomId(), id: null, measure: null },
    { _id: randomId(), id: null, measure: null },
    { _id: randomId(), id: null, measure: null },
  ],
  fullImage: null,
};
