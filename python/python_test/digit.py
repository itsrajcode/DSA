x = input("Enter symbol: ")

if x.isdigit():
    print("Symbol is digit")
elif x.isalpha():
    if x>="A" and x<="Z":
        print(x.lower())
        print("Symbol is capital letter")
    else:
        print("Symbol is small letter")    
        print(x.upper())

elif x.isspace():
    print("Symbol is space")

else:
    print("Symbol is other") 