from sys import stdin as s
from collections import deque
import os

dir = os.path.dirname(os.path.realpath(__file__))+"/28278.txt"
s=open(dir,"rt")

n = int(s.readline().strip())

stack = deque()
for _ in range(n):
    tmp = list(map(int,s.readline().strip().split()))
    if (tmp[0] ==1):
        stack.append(tmp[1])
    elif (tmp[0] ==2):
        if(not len(stack)):
            print(-1)
        else:
            print(stack.pop())
    elif (tmp[0] ==3):
        print(len(stack))
    elif(tmp[0] ==4):
        if(not len(stack)):
            print(1)
        else:
            print(0)
    else:
        if(not len(stack)):
            print(-1)
        else:
            print(stack[len(stack)-1])