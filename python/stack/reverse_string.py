from collections import deque

class Stack:
    def __init__(self):
        self.container = deque()

    def push(self, val):
        self.container.append(val)

    def Pop(self):
        return self.container.pop()
    
    def peek(self):
        return self.container[-1]

    def isEmpty(self):
        return len(self.container) == 0
    
    def size(self):
        return len(self.container)
    
    def reverse_string(self, string):
        for char in string:
            self.push(char)
        rev = ""
        while not self.isEmpty():
            rev += self.Pop()
        return rev
    
if __name__ == '__main__':
    stack = Stack()
    stack.push(5)
    stack.push(4)
    stack.push(3)
    stack.push(2)
    stack.push(1)
    
    while not stack.isEmpty():
        print(stack.peek())
        stack.Pop()

    print(stack.reverse_string("we will conqure the COVID-19"))
