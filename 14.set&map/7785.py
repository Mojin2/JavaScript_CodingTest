from sys import stdin as s
import os

dir = os.path.dirname(os.path.realpath(__file__))+"/7785.txt"
s=open(dir,"rt")
n = int(s.readline())
arr = s.read().split("\n")
answer = {}

for i in arr:
    name,state = i.split()
    if (state == "enter"):
        answer[name] = True
    elif (state == "leave"):
        del answer[name]

print(answer)
list(answer).sort(reverse=True)

print(*answer,sep="\n")