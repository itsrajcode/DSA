#include<stdio.h>
#include<stdlib.h>

struct node{
    int data;
    struct node* next;
};

struct node* createNode(int data){ 
    struct node* node;
    struct node* start;

    struct node* newNode = (struct node*)malloc(sizeof(struct node));
    if(newNode == NULL){
        printf("Memory not allocated.\n");
        exit(1);
    }
    newNode->data = data;
    newNode->next = start;
    return newNode;
}
void traverseList(struct node* head){
    struct node* start;
    while(head != start){
        printf("%d-> ", head->data);
        head = head->next;
    }
    printf("\n");
}

int main(){
    struct node* head = createNode(1);
    head-> next = createNode(2);
    head-> next-> next = createNode(3);
    head-> next-> next-> next = createNode(10);
    head-> next-> next-> next-> next = createNode(5);
    head-> next-> next-> next-> next-> next = createNode(1);
    printf("linkedlist: ");
    traverseList(head);
    return 0;
}

