from sys import stdin as s
import os

dir = os.path.dirname(os.path.realpath(__file__))+"/1620.txt"
s=open(dir,"rt")
n,m = map(int,s.readline().strip().split())
arr = s.read().strip().split("\n")
list = arr[:n]
target = arr[n:]


dic = {}
answer = []
for idx,i in enumerate(list):
    dic[idx+1] = i
    dic[i] = idx+1;

for item in target:
    if (item.isalpha()):
        answer.append(dic[item])
    else:
        answer.append(dic[int(item)])

print(*answer,sep="\n")
