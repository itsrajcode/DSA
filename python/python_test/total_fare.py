dist = int(input("Enter distance: "))
min_fare = 30
if dist <= 3:
    fare = min_fare

elif dist <= 10:
    fare = 10*dist
elif dist>10:
    fare = 8*dist

print("Total fare: ", fare)