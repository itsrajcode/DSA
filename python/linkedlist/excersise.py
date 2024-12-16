class node:
    def __init__(self, data=None, next = None):
        self.data = data
        self.next = next

class linkedlist:

    def __init__(self):
        self.head = None
    def insert(self,data):
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

    def insert_after_value(self, data_after,data_to_insert):
        if self.head is None:
            print("Linkedlist is empty")
            return
        
        itr = self.head
        while itr:
            if itr.data == data_after:
                new_node = node(data_to_insert,itr.next)
                itr.next = new_node
                break
            itr = itr.next
        else:
            print(data_after,"not found in linkedlist")

    def remove_by_value(self, data):
        if self.head is None:
            print("Linkedlist is empty")
            return
        if self.head.data == data:
            self.head = self.head.next
            return
        itr = self.head
        while itr.next:
            if itr.next.data == data:
                itr.next = itr.next.next
                break
            itr = itr.next
        else:
            print(data,"not found in linkedlist")




if __name__ =="__main__":
    ll = linkedlist()
    ll.insert(1)
    ll.insert(2)
    ll.insert(3)
    ll.insert_after_value(2,4)
    ll.remove_by_value(3)
    ll.print()