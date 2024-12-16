function kthElement(a, b, k) {
  // code here
  let result = [];
  let i = 0,
    j = 0;
  while (result.length < k) {
    if (i < a.length && j < b.length) {
      if (a[i] <= b[j]) {
        result.push(a[i]);
        i++;
      } else {
        result.push(b[j]);
        j++;
      }
    } else if (i < a.length) {
      result.push(a[i]);
      i++;
    } else {
      result.push(b[j]);
      j++;
    }
  }
  return result[k - 1];
}

let a = [2, 3, 6, 7, 9], b = [1, 4, 8, 10], k = 5;
console.log(kthElement(a, b, k));

