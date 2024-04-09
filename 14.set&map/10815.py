from sys import stdin as s
import os

dir = os.path.dirname(os.path.realpath(__file__))+"/10815.txt"
s=open(dir,"rt")
N = int(s.readline().strip())
arr = set(s.readline().split())
M = int(s.readline().strip())
target = s.readline().split()

print(" ".join("1" if x in arr else "0" for x in target))

tmp = "123\n123\n123"
a = tmp.split("\n")
print(a)