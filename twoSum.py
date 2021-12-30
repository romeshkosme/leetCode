def sum(arr, target):
    found = False
    for i in range(len(arr)-1):
        for j in range(i+1,len(arr)):
            if arr[i] + arr[j] == target:
                return [i,j]
                found = True
                break;
        if found:
            break;

ans = sum([1,2,3,4,5,6,7,8,9],15)
print("ans :: ", ans)
