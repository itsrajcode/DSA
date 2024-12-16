f = open("text.txt", "a")
f.write("my name is raj")

f.close()

f = open("text.txt", "r")
print(f.read())

f.close()

f = open("text.txt", "w")
f.write("hello world")

f.close()


