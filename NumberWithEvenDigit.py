arr = [12,345,2,6,7896]
even = 0
for i in arr:
    even += 1 if len(str(i))%2==0 else 0
print(even)