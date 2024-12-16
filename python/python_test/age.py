age = int(input("Enter your age: "))

if age >= 18:
    print("You are eligible to vote")
else:
    left = 18 - age
    print("You are not eligible to vote. You have", left, "years left")
    print("You are not eligible to vote. You have", left*12, "months left")
