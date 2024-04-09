from sys import stdin as s
import os

dir = os.path.dirname(os.path.realpath(__file__))+"/10950.txt"
s=open(dir,"rt")
n = int(s.readline().strip())

for i in range(n):
    a,b = map(int,s.readline().split())
    print(a+b)
