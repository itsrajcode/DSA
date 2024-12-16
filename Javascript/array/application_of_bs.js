//Two pointer approach

arr = [2, 4, 5, 6, 7, 8, 9, 11, 13, 15, 16, 17, 18, 20];
l = 0;
r = arr.length - 1;
key = 16;
while (l <= r) {
  if (arr[l] + arr[r] == key) {
    console.log(arr[l], arr[r]);
    l++
    r--
  } else if (arr[l] + arr[r] > key) {
    r--;
  } else {
    l++;
  }
}
