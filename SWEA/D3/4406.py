import sys
import os

dir = os.path.dirname(os.path.realpath(__file__))+"/4406.txt"
sys.stdin=open(dir,"rt")

T = int(input())
for test_case in range(1,T+1):
    answer = 0
    str = input()
    str = str.replace("o","").replace("a","").replace("e","").replace("i","").replace("u","")
    print("#{0} {1}".format(test_case,str))
