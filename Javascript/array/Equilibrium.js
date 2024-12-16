function Equilibrium(arr) {
    let sum = 0;
    let leftsum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    for (let i = 0; i < arr.length; i++) {
        sum -= arr[i];
        if (leftsum == sum) {
            return i+1;
        }
        leftsum += arr[i];
    }
    return -1
}

arr = [1,3,5,2,2]

console.log(Equilibrium(arr));