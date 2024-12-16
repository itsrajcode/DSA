class Treenode:
    def __init__(self,data):
        self.data = data
        self.children = []
        self.parent = None
    
    def add_child(self,child):
        child.parent = self
        self.children.append(child)

    def get_level(self):
        level = 0
        p = self.parent
        while p:
            level +=  1
            p = p.parent
        return level
    
    def print_tree(self):
        spaces = ' '*self.get_level()*3
        prefix = spaces + "|__" if self.parent else ""
        print(prefix + self.data)
        if self.children:
            for child in self.children:
                child.print_tree()

if __name__ == "__main__":
    root = Treenode("Electronics")
    laptop = Treenode("Laptop")
    tv = Treenode("Mobile")
    laptop.add_child(Treenode("Macbook"))
    laptop.add_child(Treenode("Asus"))
    tv.add_child(Treenode("Samsung"))
    tv.add_child(Treenode("Iphone"))
    root.add_child(laptop)
    root.add_child(tv)
    root.print_tree()