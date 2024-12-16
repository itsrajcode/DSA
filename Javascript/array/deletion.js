function Deletion(arr, N, k)  {
  if (N == 0) {
    console.log("Array is empty");
    return;
  }
  let i;
  for (i = k; i < N - 1; i++) {
    arr[i] = arr[i + 1];
  }
   N = N - 1;
   for (i = 0; i < N; i++) {
    console.log(arr[i]);
  }
};


arr = [1, 2, 3, 4, 5];
N = arr.length;
k = 3;

Deletion(arr, N, k);

