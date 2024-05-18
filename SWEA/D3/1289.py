import sys
import os

dir = os.path.dirname(os.path.realpath(__file__))+"/1289.txt"
sys.stdin=open(dir,"rt")

T = int(input())
for test_case in range(1,T+1):
    answer = 0
    memory = list(input())
    prev = "0"
    for i in range((len(memory))):
        if (prev == memory[i]):
            continue
        else:
            prev = memory[i]
            answer +=1
            

    print("#{0} {1}".format(test_case,answer))

