import sys
import os

dir = os.path.dirname(os.path.realpath(__file__))+"/12221.txt"
sys.stdin=open(dir,"rt")

T = int(input())
for test_case in range(1,T+1):
    answer = 0;
    a,b = map(int,input().split())
    if (a < 10 and b <10):
        answer = a*b;
    else:
        answer = -1
    print("#{0} {1}".format(test_case,answer))
