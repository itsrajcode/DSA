function TripletwithzeroSum(arr) {
    let n = arr.length;
    let count = [];
    for (let i = 0; i < n - 2; i++) {
        let j = i + 1;
        let k = n - 1;
        while (j < k) {
            if (arr[i] + arr[j] + arr[k] == 0) {
                count.push([i, j, k]);
                j++;
                k--;
            } else if (arr[i] + arr[j] + arr[k] > 0) {
                k--;
            } else {
                j++;
            }
        }
    }
    return count;
}

let arr = [0, -1, 2, -3, 1]
console.log(TripletwithzeroSum(arr));