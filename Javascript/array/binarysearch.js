Arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,23,26,34,67,89]

function binarySearch(Arr, key) {
    let low = 0
    let high = Arr.length - 1
    let mid;
    while(low <= high) {
        mid = Math.floor((low + high) / 2)
        if (Arr[mid] == key) {
            return mid
        } else if (Arr[mid] > key) {
            high = mid - 1
        } else {
            low = mid + 1
        }

        if (low > high) {
            return -1
        }
        

    }
}

console.log(binarySearch(Arr, 89))