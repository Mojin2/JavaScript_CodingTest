from sys import stdin as s
import os

dir = os.path.dirname(os.path.realpath(__file__))+"/11478.txt"
s=open(dir,"rt")

str = s.readline().strip()
answer = set()

for i in range(len(str)):
    for j in range(len(str)):
        answer.add(str[i:i+j+1])

print(len(answer))

