export const formatWord = (maxLength: number, word: string): string => {
  return word.length >= maxLength ? word.slice(0, maxLength) + '...' : word;
};

export const getPages = (total: number, limit: number): number => {
  if (!Number.isInteger(total) || !Number.isInteger(limit)) return 0;
  return Math.ceil(total / limit);
};

export const capitalizeWord = (word: string): string => {
  return word.slice(0, 1).toUpperCase() + word.slice(1);
};

export const randomId = (length: number = 10): string => {
  return Math.random()
    .toString(36)
    .substring(2, length + 2);
};
