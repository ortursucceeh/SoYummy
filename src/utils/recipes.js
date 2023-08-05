export function formatInstructions(instructions) {
  // console.log(instructions);
  // console.log(instructions.split('\n'));
  return instructions.split('\n').filter(str => str !== '\r');
  // console.log(instructions);
}
