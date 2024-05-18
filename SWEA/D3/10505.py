import sys
import os

dir = os.path.dirname(os.path.realpath(__file__))+"/10505.txt"
sys.stdin=open(dir,"rt")

T = int(input())
for test_case in range(1,T+1):
    answer = 0;
    n = int(input())
    arr = list(map(int,input().strip().split()))
    total = 0
    for i in range(n):
        total+= arr[i]
    average = total/n
    for i in range(n):
        if (average >= arr[i]):
            answer +=1
    print("#{0} {1}".format(test_case,answer))
