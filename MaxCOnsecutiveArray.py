arr = [1,0,1,1,0,1]#[1,1,0,1,1,1]
maxOld = 0
maxNew = 0
for i in arr:
    maxOld = maxOld+1 if i==1 else 0
    maxNew = maxOld if maxNew < maxOld else maxNew
print(maxNew)