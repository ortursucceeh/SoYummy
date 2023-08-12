export function formatInstructions(instructions) {
  return instructions
    .slice(0, -1)
    .replaceAll('\n', ' ')
    .replaceAll('\r', '')
    .split('. ')
    .filter(str => str.length >= 10)
    .map(str => str + '.');
}

export const COOKING_TIMES = [
  0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115,
  120,
];

export const INGREDIENTS = [];
