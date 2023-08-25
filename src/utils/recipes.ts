import { randomId } from './functions';

interface Ingredient {
  _id: string;
  id: null | string;
  measure: null | string;
}

interface InitialOwnRecipe {
  title: string;
  category: string;
  description: string;
  instructions: string;
  time: number | null;
  ingredients: Ingredient[];
  fullImage: string | null;
}

export const formatInstructions = (instructions: string): string[] => {
  return instructions
    .slice(0, -1)
    .replaceAll('\r', '')
    .split('\n')
    .filter(str => str.length >= 5);
};

export const initialOwnRecipe: InitialOwnRecipe = {
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
