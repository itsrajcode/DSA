from collections import deque

class Queue:
    def __init__(self):
        self.container = deque()
    
    def enqueue(self, val):
        self.container.appendleft(val)
    
    def dequeue(self):
        return self.container.pop()
    
    def size(self):
        return len(self.container)
    
    def isEmpty(self):
        return len(self.container) == 0
    
    def peek(self):
        return self.container[-1]
    
if __name__ == "__main__":
    q = Queue()

    q.enqueue({
        "company": "Google",
        "timestamp": "9:30",
        "stock": 1200
    })

    q.enqueue({
        "company": "Amazon",
        "timestamp": "9:30",
        "stock": 1300
    })

    q.enqueue({
        "company": "Netflix",
        "timestamp": "9:30",
        "stock": 1400
    })

    while not q.isEmpty():
        print(q.peek())
        q.dequeue()
        