from sys import stdin as s
import os

dir = os.path.dirname(os.path.realpath(__file__))+"/10816.txt"
s=open(dir,"rt")

n = int(s.readline().strip())
arr = list(map(int,s.readline().strip().split()))
m = int(s.readline().strip())
target = list(map(int,s.readline().strip().split()))

dic={}
for i in arr:
    if (i in dic):
        dic[i]+=1
    else:
        dic[i]=1

for i in target:
    if (i in dic):
        print(dic[i],end=" ")
    else:
        print(0,end=" ")