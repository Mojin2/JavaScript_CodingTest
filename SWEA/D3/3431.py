import sys
import os

dir = os.path.dirname(os.path.realpath(__file__))+"/3431.txt"
sys.stdin=open(dir,"rt")

T = int(input())
for test_case in range(1,T+1):
    a,b,cur = map(int,input().split());
    answer = 0;
    if (a <= cur <= b):
        answer = 0
    elif ( b < cur):
        answer = -1
    else:
        answer = a-cur
    print("#{0} {1}".format(test_case,answer))
