#include<stdio.h>

void printArray(int* A, int n) {
    for(int i=0; i<n; i++)
    {
        printf("%d ", A[i]);
    }
    printf("\n");
}

void insertionSort(int* A, int n) {
    int key, j;
    for (int i=0; i<=n-1; i++){
        key = A[i];
        j = i-1;

        while(j>= 0 && A[j] > key)
        {
            A[j+1] = A[j];
            j--;
        }
        A[j+1] = key;
    }
    printArray(A,n);

}

int main() {
    int A[] = {2,5,3,7,6,8,1};
    int n = 7;
    printArray(A,n);
    insertionSort(A, n);

    return 0;
}