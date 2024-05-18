import sys
import os

dir = os.path.dirname(os.path.realpath(__file__))+"/13218.txt"
sys.stdin=open(dir,"rt")

T = int(input());
for test_case in range(1,T+1):
    count = int(input())//3
    print("#{0} {1}".format(test_case,count))
