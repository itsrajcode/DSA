function NumOfSubset(arr) {
    arr.sort((a, b) => a - b);
    let currentSub = [arr[0]];
    let count = 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] == 1) {
            currentSub.push(arr[i]);
        } else {
            currentSub = [arr[i]];
            count++;
        }
    }
    return count;
}

arr = [100, 56, 5, 6, 102, 58, 101, 57, 7, 103]
console.log(NumOfSubset(arr));

