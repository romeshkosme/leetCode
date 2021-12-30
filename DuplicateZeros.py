arr = [9,0,9,0,6,0,0,0,1,1,6,5,4,4,8,3,0,0,0,1,5,3,0,0,7,2,1,0,2,0,9,1,0,2,0,0,0,0,0,0,0,6,0,0,7,9,0,8,7,0,9,7,1,0,2,0,0,0,0,9,0,0,0,0]#[0,4,1,0,0,8,0,0,3]
add = []
for i in range(len(arr)):
    if arr[i] == 0 and len(add)+i < len(arr):
        add.append(i)
for i in add:
    arr.insert(i+1, 0)
    arr.pop()
print(arr)