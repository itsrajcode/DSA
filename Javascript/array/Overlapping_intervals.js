function OverlappingIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    console.log(intervals);
    
    let count = 1;
    let result = [];
    
    let current = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < current[1]) {
            current[1] = Math.max(current[1], intervals[i][1]);
        } else {
            result.push(current);
            current = intervals[i];
            count++;
        }
    }
    result.push(current);
    console.log(intervals.length - count);
    return result;
}

arr = [[1, 3], [3, 6], [6, 9], [9, 12]];
console.log(OverlappingIntervals(arr));

