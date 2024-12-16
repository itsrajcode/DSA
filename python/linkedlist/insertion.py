class node:
    def __init__(self, data=None, next = None):
        self.data = data
        self.next = next

class linkedlist:
    def __init__(self):
        self.head = None

    def insert(self, data):
        new_node = node(data)
        new_node.next = self.head
        self.head = new_node

    def print(self):
        if self.head is None:
            print("Linked List is empty")
            return
        itr = self.head
        llstr = ''
        while itr:
            llstr += str(itr.data)+' --> ' if itr.next else str(itr.data)
            itr = itr.next
        print(llstr)

    def insert_at_end(self, data):
        if self.head is None:
            self.head = node(data, None)
            return
        itr = self.head
        while itr.next:
            itr = itr.next
        itr.next = node(data, None)

    def insert_value(self, list_data):
        self.head = None
        for data in list_data:
            self.insert_at_end(data)

    def length_of_linked_list(self):
        count = 0
        itr = self.head
        while itr:
            count += 1
            itr = itr.next
        return count
    
    def remove_at(self, index):
        if index < 0 or index >= self.length_of_linked_list():
            raise Exception("Invalid Index")
        if index == 0:
            self.head = self.head.next
            return
        count = 0
        itr = self.head
        while itr:
            if count == index - 1:
                itr.next = itr.next.next
                break
            itr = itr.next
            count += 1

    def insert_at(self,index,data):
        if index<0 or index>self.length_of_linked_list():
            raise Exception("Invalid Index")
        if index==0:
            self.insert(data)
            return
        count=0
        itr=self.head
        while itr:
            if count==index-1:
                node1=node(data,itr.next)
                itr.next=node1
                break
            itr=itr.next
            count+=1


if __name__ == '__main__':
    ll = linkedlist()
    ll.insert_value(["apple", "banana", "grapes", "mango", "orange"])
    ll.remove_at(2)
    ll.insert_at(3, "kiwi")
    ll.print()
    print(ll.length_of_linked_list())

