from sys import stdin as s
from collections import deque
import os

dir = os.path.dirname(os.path.realpath(__file__))+"/15649.txt"
s=open(dir,"rt")

n,m = map(int,s.readline().strip().split())


# 중복 없이 n개에서 m개 뽑는 경우 (순서 상관 O) - 순열
def permutation(n,m):
    number = [i+1 for i in range(n)]
    answer = []
    tmp = []

    def backtrack():
        if len(tmp) == m:
            answer.append(tmp[:])
            return
        
        for i in range(len(number)):
            if (number[i] in tmp):
                continue
            tmp.append(number[i])
            backtrack()
            tmp.pop()
    backtrack()

    return answer

print(permutation(n,m))

# 중복 없이 n개에서 m개 뽑는 경우 (순서 상관 X) - 조합
def combination(n,m):
    number = [i+1 for i in range(n)]
    answer = []
    tmp = []

    def backtrack(cur):
        if len(tmp) == m:
            answer.append(tmp[:])
            return
        
        for i in range(cur,len(number)):
            tmp.append(number[i])
            backtrack(i+1)
            tmp.pop()
    backtrack(0)

    return answer

print(combination(n,m))

# 중복 가능하게 n개에서 m개 뽑는 경우 (순서 상관 O)
def permutation2(n,m):
    number = [i+1 for i in range(n)]
    answer = []
    tmp = []

    def backtrack():
        if len(tmp) == m:
            answer.append(tmp[:])
            return
        
        for i in range(len(number)):
            tmp.append(number[i])
            backtrack()
            tmp.pop()
    backtrack()

    return answer

print(permutation2(n,m))

# 중복 가능하게 n개에서 m개 뽑는 경우 (순서 상관 X) - 조합
def combination2(n,m):
    number = [i+1 for i in range(n)]
    answer = []
    tmp = []

    def backtrack(cur):
        if len(tmp) == m:
            answer.append(tmp[:])
            return
        
        for i in range(cur,len(number)):
            tmp.append(number[i])
            backtrack(i)
            tmp.pop()
    backtrack(0)

    return answer

print(combination2(n,m))