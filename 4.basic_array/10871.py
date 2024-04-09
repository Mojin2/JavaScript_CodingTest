from sys import stdin as s
import os
import math

dir = os.path.dirname(os.path.realpath(__file__))+"/10871.txt"
s=open(dir,"rt")
n,x = list(map(int,s.readline().strip().split()))
arr = list(map(int,s.readline().strip().split()))

# print(arr.index(min(arr)))

set = {1,2,3,4}

str = "baaa".upper()
l=[i for i in range(26)]

for i in range(26):
    l[i] = str.count(chr(i+65))
if l.count(max(l))>=2:
    print("?")
else:
    print(chr(l.index(max(l))+65))

m = [[0 for i in range(3)] for i in range(5)]
print(m)

print(abs(-10))

tmp2 = [5,4,3,2,1]
tmp2.sort()
print(tmp2)

tmp3 = "2143"
lis = sorted(list(map(int,list(tmp3))),reverse=True)
print(*lis,sep="")



string = "3 4"
[a,b]= map(int,string.split())
print(a,b)