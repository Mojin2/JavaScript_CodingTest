import sys
import os

dir = os.path.dirname(os.path.realpath(__file__))+"/11688.txt"
sys.stdin=open(dir,"rt")

T = int(input())
for test_case in range(1,T+1):
    answer = [1,1]
    arr = list(input())
    for i in range(len(arr)):
        if (arr[i] == "L"):
            answer= [answer[0],answer[0]+answer[1]]
        else:
            answer = [answer[0]+answer[1],answer[1]]
    print("#{0}".format(test_case),end=" ")
    print(*answer)
