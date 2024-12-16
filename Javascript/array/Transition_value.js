function TransitionValue(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            return i;
        }
    }
    
    if (arr.every(value => value === 1)) {
        return 0;
    }
    
    return -1;
}

arr = [0, 1, 1];
console.log(TransitionValue(arr));
