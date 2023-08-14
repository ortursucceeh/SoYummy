export function formatFileName(fileName) {
  return fileName.length >= 30 ? fileName.slice(0, 30) + '...' : fileName;
}
