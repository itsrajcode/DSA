def add(*args):
    return sum(args)

def subtract(*args):
    result = args[0]
    for num in args[1:]:
        result -= num
    return result

def multiply(*args):
    result = 1
    for num in args:
        result *= num
    return result

def divide(*args):
    result = args[0]
    for num in args[1:]:
        result /= num
    return result

print("Select operation:")
print("1. Add")
print("2. Subtract")
print("3. Multiply")
print("4. Divide")

choice = input("Enter choice(1/2/3/4): ")
numbers = list(map(int, input("Enter numbers separated by space: ").split()))

if choice == '1':
    print(" + ".join(map(str, numbers)), "=", add(*numbers))

elif choice == '2':
    print(" - ".join(map(str, numbers)), "=", subtract(*numbers))

elif choice == '3':
    print(" * ".join(map(str, numbers)), "=", multiply(*numbers))

elif choice == '4':
    print(" / ".join(map(str, numbers)), "=", divide(*numbers))
else:
    print("Invalid input")

