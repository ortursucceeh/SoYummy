export function formatInstructions(instructions) {
  return instructions.split('\n').filter(str => str !== '\r');
}

export const COOKING_TIMES = [
  0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115,
  120,
];

export const INGREDIENTS = [];