#include<stdio.h>

int binarySearch(int arr[], int low, int high, int key) {
    if(low > high) {
        return -1;
    }
    int mid = (low + high)/2;

    while(low<high) {
        if (arr[mid] == key)
        { 
            return mid;
        
        }
        else if(arr[mid] > key){
            return binarySearch(arr,low,mid-1,key);
        }
        else {
            return binarySearch(arr,mid+1,high,key);
        }
    }
    return -1;

}


int main() {
    int arr[100], n, i;
    printf("Enter the number of elements: ");
    scanf("%d", &n);
    printf("Enter the elements: ");
    for(i=0; i<n; i++) {
        scanf("%d", &arr[i]);
    }
    printf("Enter the element to be searched: ");
    int key;
    scanf("%d", &key);
    int result = binarySearch(arr, 0, n-1, key);
    if(result == -1) {
        printf("Element not found\n");
    } else {
        printf("Element found at index %d\n", result);
    }

    return 0;
}