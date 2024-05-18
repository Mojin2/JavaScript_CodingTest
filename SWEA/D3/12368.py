import sys
import os

dir = os.path.dirname(os.path.realpath(__file__))+"/12368.txt"
sys.stdin=open(dir,"rt")

T = int(input())
for test_case in range(1,T+1):
    now, after = map(int,input().split());
    answer = now+after
    if (answer >= 24):
        answer = answer-24
    print("#{0} {1}".format(test_case,answer))
