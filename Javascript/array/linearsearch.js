Arr = [2,57,3,1,4,5,6,13,9]


linearSearch = (Arr, key) => {

    for (let i = 0; i < Arr.length; i++) {
        if (Arr[i] == key) {
            return i
        }
    }
    return -1 // if the key is not found in the array, return -1 to indicate its absence
}

console.log(linearSearch(Arr, 33))