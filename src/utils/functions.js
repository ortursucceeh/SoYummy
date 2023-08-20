export function formatWord(maxLength, word) {
  return word.length >= maxLength ? word.slice(0, maxLength) + '...' : word;
}

export function getPages(total, limit) {
  if (!Number.isInteger(total) || !Number.isInteger(limit)) return 0;
  return Math.ceil(total / limit);
}

export function capitalizeWord(word) {
  return word.slice(0, 1).toUpperCase() + word.slice(1);
}

export function randomId(length = 10) {
  return Math.random()
    .toString(36)
    .substring(2, length + 2);
}
