function PythagoreanTriplet(arr) {
    arr.sort((a, b) => a - b);
    for (let c = arr.length - 1; c >= 2; c--) {
        let a = 0;
        let b = c - 1;
        while (a < b) {
            if (arr[a] * arr[a] + arr[b] * arr[b] === arr[c] * arr[c]) {
                return true;
            } else if (arr[a] * arr[a] + arr[b] * arr[b] < arr[c] * arr[c]) {
                a++;
            } else {
                b--;
            }
        }
    }
    return false;
}

let arr = [3, 2, 4, 6, 5];
console.log(PythagoreanTriplet(arr));
