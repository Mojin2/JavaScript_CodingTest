from sys import stdin as s
import os

dir = os.path.dirname(os.path.realpath(__file__))+"/1269.txt"
s=open(dir,"rt")

n,m = map(int,s.readline().strip().split())
a = set(map(int,s.readline().split()))
b = set(map(int,s.readline().split()))

print(len(a.difference(b))+len(b.difference(a)))

