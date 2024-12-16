def grt_hash(key):
    h = 0
    for char in key:
        h += ord(char)
    return h % 100

class HashTable:
    def __init__(self):
        self.MAX = 100
        self.arr = [[] for i in range(self.MAX)]

    def get_hash(self,key):
        h = 0
        for char in key:
            h += ord(char)
        return h % self.MAX

    def add(self,key, val):
        h = self.get_hash(key)
        found = False
        for idx,element in enumerate(self.arr[h]):
            if len(element) == 2 and element[0] == key:
                self.arr[h][idx] = (key, val)
                found = True
                break

        if not found:
            self.arr[h].append((key, val))

    def get(self,key):
        h = self.get_hash(key)
        for element in self.arr[h]:
            if len(element) == 2 and element[0] == key:
                return element[1]


if __name__ == '__main__':
    ht = HashTable()
    ht.add('march 9',130)
    ht.add('march 17',120)
    h = ht.get('march 9')
    print(h)
