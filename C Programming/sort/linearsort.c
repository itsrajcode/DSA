#include<stdio.h>

int main () {
    int arr[100], n, i, j, temp;
    printf("Enter the number of elements: ");
    scanf("%d", &n);
    printf("Enter the elements: ");
    for(i=0; i<n; i++) {
        scanf("%d", &arr[i]);
    }

    for(i=0; i<n; i++) { 
        for(j=i+1; j<n; j++) {
            if(arr[j]< arr[i]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        printf("%d\t", arr[i]);
    }
    printf("\n");
    return 0;
}