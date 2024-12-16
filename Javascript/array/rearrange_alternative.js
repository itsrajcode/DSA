function rearrange(arr) {
    let n = arr.length;
    arr.sort((a, b) => a - b);
  
    let maxIdx = n - 1; 
    let minIdx = 0;
    let maxElement = arr[maxIdx] + 1; 
  
    for (let i = 0; i < n; i++) {
      if (i % 2 === 0) {
        // At even index, store the largest remaining element
        arr[i] += (arr[maxIdx] % maxElement) * maxElement;
        maxIdx--;
      } else {
        // At odd index, store the smallest remaining element
        arr[i] += (arr[minIdx] % maxElement) * maxElement;
        minIdx++;
      }
    }
  
    // Reduce all elements to their new values
    for (let i = 0; i < n; i++) {
      arr[i] = Math.floor(arr[i] / maxElement);
    }
  
    return arr;
  }
  
  let arr = [1, 2, 3, 4, 5, 6];
  console.log(rearrange(arr)); // [6, 1, 5, 2, 4, 3]
  