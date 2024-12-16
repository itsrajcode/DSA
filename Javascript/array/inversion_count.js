function inversionCount(arr) {
    let count = 0;
    let temp = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        let key = arr[i];
        let low = 0;
        let high = temp.length - 1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (temp[mid] < key) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        count += low;
        temp.splice(low, 0, key);
    }
    return count;
}

arr = [10,10,10]
console.log(inversionCount(arr));

