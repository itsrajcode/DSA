def get_hash(key):
    h=0
    for char in key:
        h+=ord(char)
        return h%100

class hashTable:
    def __init__(self):
        self.MAX = 100
        self.arr = [None for i in range(self.MAX)]

    def get_hash(self,key):
        h=0
        for char in key:
            h+=ord(char)
            return h % self.MAX

    def add(self,key,val):
        h = self.get_hash(key)
        self.arr[h] = val

    def get(self,key):
        h = self.get_hash(key)
        return self.arr[h]


if __name__ == '__main__':
   ht = hashTable()
   ht.add('march 9',130)
   ht.add('march 17',120)
   h = ht.get('march 9')
   print(h)