function findUnion(a, b) {
    let idx1 = 0;
    let idx2 = 0;
    let result = new Set(); // Use a Set to ensure no duplicates

    // Traverse both arrays simultaneously
    while (idx1 < a.length && idx2 < b.length) {
        if (a[idx1] < b[idx2]) {
            result.add(a[idx1]);
            idx1++;
        } else if (b[idx2] < a[idx1]) {
            result.add(b[idx2]);
            idx2++;
        } else {
            // Both elements are equal
            result.add(a[idx1]);
            idx1++;
            idx2++;
        }
    }

    // Add remaining elements from array `a`
    while (idx1 < a.length) {
        result.add(a[idx1]);
        idx1++;
    }

    // Add remaining elements from array `b`
    while (idx2 < b.length) {
        result.add(b[idx2]);
        idx2++;
    }

    return Array.from(result); // Convert Set back to an array
}

let arr1 = [-7, -8];
let arr2 = [-8, -3, 8];
console.log(findUnion(arr1, arr2));
