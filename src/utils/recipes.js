export function formatInstructions(instructions) {
  return instructions
    .slice(0, -1)
    .replaceAll('\r', '')
    .split('\n')
    .filter(str => str.length >= 5);
}

export const COOKING_TIMES = [
  0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115,
  120,
];

export function randomId(length = 10) {
  return Math.random()
    .toString(36)
    .substring(2, length + 2);
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
