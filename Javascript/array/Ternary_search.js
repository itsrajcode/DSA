function TernarySearch(arr, low, high, key) {
  const mid1 = Math.floor(low + (high - low) / 3);
  const mid2 = Math.floor(high - (high - low) / 3);
  while (low < high) {
    if (arr[mid1] == key) {
      return mid1;
    } else if (arr[mid2] == key) {
      return mid2;
    } else if (key < arr[mid1]) {
      return TernarySearch(arr, low, mid1 - 1, key);
    } else if (key > arr[mid2]) {
      return TernarySearch(arr, mid2 + 1, high, key);
    } else {
      return TernarySearch(arr, mid1 + 1, mid2 - 1, key);
    }
  }
  return -1;
}

arr = [20, 25, 47, 56, 59, 63, 65, 67, 79, 82];
const i = 0;
const j = arr.length - 1;

result = TernarySearch(arr, i, j, 79);

console.log("The element is present at index", result);
