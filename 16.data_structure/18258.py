from sys import stdin as s
from collections import deque
import os

dir = os.path.dirname(os.path.realpath(__file__))+"/18258.txt"
s=open(dir,"rt")

n = int(s.readline().strip())

queue = deque()
for _ in range(n):
    tmp = s.readline().strip().split()
    if (tmp[0] =='push'):
        queue.append(int(tmp[1]))
    elif (tmp[0]=='pop'):
        if (len(queue)):
            print(queue.popleft())
        else:
            print(-1)
    elif(tmp[0]== 'empty'):
        if (len(queue)):
            print(0)
        else:
            print(1)
    elif (tmp[0] == 'size'):
        print(len(queue))
    elif(tmp[0]=='front'):
        if (len(queue)):
            print(queue[0])
        else:
            print(-1)
    elif(tmp[0]=='back'):
        if(len(queue)):
            print(queue[len(queue)-1])
        else:
            print(-1)