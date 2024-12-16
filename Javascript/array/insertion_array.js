function Insertion(arr, N, k, Size, item) {

    if(N == Size) {
        console.log("Array is full");
        return
    };

    let i = N - 1;

    while (i >= k) {
        arr[i + 1] = arr[i]
        i = i - 1
    };
    arr[k] = item;
    N = N + 1;
    console.log(arr);
}

Arr = [1, 2, 3, 5];
let Size = 5;
let k = 3;
let item = 4;
let N = Arr.length;

Insertion(Arr, N, k, Size,item);

