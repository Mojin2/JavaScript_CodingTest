from sys import stdin as s
import os

dir = os.path.dirname(os.path.realpath(__file__))+"/1330.txt"
s=open(dir,"rt")

a,b= list(map(int,s.readline().strip().split()))

if (a > b):
    print(">")
elif (a < b):
    print("<")
else:
    print("==")