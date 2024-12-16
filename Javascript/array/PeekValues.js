function peakElement(arr) {
    // Code here
    
    for(let i=1;i<arr.length;i++){
        if(arr[i]>arr[i-1] && arr[i]>arr[i+1]){
            return i;
        }
        
        if(i == arr.length-1){
            if(arr[i]>arr[i-1] && arr[i]> -Infinity){
                return i;
            }
        }
        
        if(i == 1){
            if(arr[i-1]>-Infinity && arr[i-1]>arr[i]){
                return i;
            }
        }
       
    }
    return -1;
}

arr = [-3,-5];
console.log(peakElement(arr));

