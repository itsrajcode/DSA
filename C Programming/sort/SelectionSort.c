#include<stdio.h>

void SelectionSort(int arr[], int n) {
    int i, j, min, temp;
    for(i=0; i<n-1; i++) {
        min = i;
        for(j=i+1; j<n; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    for(i=0; i<n; i++) {
        printf("%d\t", arr[i]);
    }
    printf("\n");
}

int main() {
     int arr[100], n, i, j, temp;
    printf("Enter the number of elements: ");
    scanf("%d", &n);
    printf("Enter the elements: ");
    for(i=0; i<n; i++) {
        scanf("%d", &arr[i]);
    }

    SelectionSort(arr,n);

    return 0;
}