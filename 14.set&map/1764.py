from sys import stdin as s
import os

dir = os.path.dirname(os.path.realpath(__file__))+"/1764.txt"
s=open(dir,"rt")

n,m = map(int,s.readline().strip().split())
arr = s.read().split("\n")

a = set(arr[:n])
b = set(arr[n:])
answer = sorted(list(a.intersection(b)))
print(len(answer))
print(*answer,sep="\n")