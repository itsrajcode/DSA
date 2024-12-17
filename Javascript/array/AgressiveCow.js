function AgressiveCows(arr, k) {
    arr.sort((a, b) => a - b);
    let low = 1;
    let high = arr[arr.length - 1] - arr[0];
    let ans = -1;

    function isPossible(mid) {
        let count = 1;
        let last = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] - last >= mid) {
                count++;
                last = arr[i];
            }
        }
        return count >= k;
    }

    // Binary search to find the maximum minimum distance
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (isPossible(mid)) {
            ans = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return ans;
}

let stalls = [1, 2, 4, 8, 9], k = 3;
console.log(AgressiveCows(stalls, k)); // Output: 3

