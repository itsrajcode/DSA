// Find repeated and missing numbers
function missingRepeat(arr) {
    arr.sort((a, b) => a - b);

    let missing = 0;
    let repeat = 0;
    let n = arr.length;

    for (let i = 1; i < n; i++) {
        if (arr[i] === arr[i - 1]) {
            repeat = arr[i];
        } else if (arr[i] - arr[i - 1] > 1) {
            missing = arr[i - 1] + 1;
        }
    }

   
    if (arr[0] !== 1) missing = 1;
    else if (arr[n - 1] !== n) missing = n;

    return [repeat, missing];
}

let arr = [2, 2];
console.log(missingRepeat(arr)); // Output: [2, 1]
