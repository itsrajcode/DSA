function PythagoreanTriplet(arr) {
    arr.sort((a, b) => a - b);
    let a, b, c;
    for (c = arr.length - 1; c >= 2; c--) {
        b = c - 1;
        a = 0;
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

let arr = [14, 17, 4, 4, 1, 9, 25, 12, 4, 9, 18, 15, 12, 2, 3, 13, 16, 17, 15, 6, 5, 20, 14, 8];
console.log(PythagoreanTriplet(arr)); //true


