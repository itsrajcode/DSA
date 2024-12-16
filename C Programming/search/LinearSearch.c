#include<stdio.h>

int LinearSearch(int arr[], int n, int key) {
    int i;
    for(i=0; i<n; i++) { 
        if(arr[i] == key) {
            return i;
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

    int result = LinearSearch(arr, n, key);
    if(result == -1) {
        printf("Element not found\n");
    } else {
        printf("Element found at index %d\n", result);
    }
    return 0;
}
