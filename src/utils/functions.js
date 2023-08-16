export function formatWord(maxLength, word) {
  return word.length >= maxLength ? word.slice(0, maxLength) + '...' : word;
}

export function getPages(total, limit) {
  const pages = Math.ceil(total / limit);
  if (Object.is(NaN, pages)) return 0;
  return pages;
}
