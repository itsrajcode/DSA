function minCost(arr) {
    let oddIndices = [], evenIndices = [];
    let oddNumbers = [], evenNumbers = [];
    
    // Separate numbers based on their parity and index parity
    for (let i = 0; i < arr.length; i++) {
        if ((i + 1) % 2 === 0) { // 1-based even index
            evenIndices.push(arr[i]);
            if (arr[i] % 2 !== 0) {
                oddNumbers.push(arr[i]);
            }
        } else { // 1-based odd index
            oddIndices.push(arr[i]);
            if (arr[i] % 2 === 0) {
                evenNumbers.push(arr[i]);
            }
        }
    }
    
    // Check if balancing is possible
    if (oddNumbers.length !== evenNumbers.length) {
        return -1;
    }
    
    // Calculate the minimum cost
    let cost = 0;
    for (let i = 0; i < oddNumbers.length; i++) {
        cost += oddNumbers[i] + evenNumbers[i];
    }
    
    return cost;
}

let arr = [4, 3, 2, 1];
console.log(minCost(arr)); // Output: 10
let arr1 = [1, 2, 3, 4];
console.log(minCost(arr1)); // Output: 0
