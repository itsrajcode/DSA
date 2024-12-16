function find(arr, N, M, key) {
    i = 0;
    j = M-1;

    while(i<N && j<M) {
        if(arr[i][j] == key) {
            return [i,j];
        }
        else if(arr[i][j] > key) {
            j--;
        }
        else {
            i++;
        }
    }

    return -1;
    
}


arr = [[1,3,5,7], [10,11,16,20], [20,30,34,60]];
N = arr.length;
M = arr[0].length;
key = 3;

console.log(find(arr, N, M, key));