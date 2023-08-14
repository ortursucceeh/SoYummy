export function formatWord(maxLength, word) {
  return word.length >= maxLength ? word.slice(0, maxLength) + '...' : word;
}
