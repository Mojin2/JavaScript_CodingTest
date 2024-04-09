from sys import stdin as s
import os

dir = os.path.dirname(os.path.realpath(__file__))+"/10870.txt"
s=open(dir,"rt")
n = int(s.readline().strip())

arr = list(map(int,s.readline().strip().split()))

target = int(s.readline().strip())

print(arr.count(target))

a = [1,2,3,4]
for i in a:
    print(i,end=" ")