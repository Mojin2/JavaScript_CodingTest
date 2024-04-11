from sys import stdin as s
from collections import deque
import os

dir = os.path.dirname(os.path.realpath(__file__))+"/20055.txt"
s=open(dir,"rt")

N,K = map(int,s.readline().split())
arr = list(map(int,s.readline().split()))
belt = [*arr[:N],*arr[N:]]
robot = [0]*len(belt)
# 한칸 회전 시키는 함수
def rotate(belt,robot):
    rotatedBelt = [0]*len(belt)
    rotatedRobot = [0]*len(robot)
    rotatedBelt[0] = belt[-1]
    rotatedRobot[0] = robot[-1]
    for i in range(1,len(belt)):
        rotatedBelt[i] = belt[i-1]
        rotatedRobot[i] = robot[i-1]

    return (rotatedBelt,rotatedRobot)

# 로봇 이동 시키는 함수
def move(belt,robot):
    for i in range(N-2,-1,-1):
        if robot[i] == 1 and belt[i+1] >= 1 and robot[i+1] == 0:
            robot[i] = 0
            robot[i+1] = 1
            belt[i+1] -= 1

# 로봇 내리는 함수
def remove(belt,robot):
    if robot[N-1]:
       robot[N-1] = 0

# 로봇 올리는 함수
def add(belt,robot):
   if belt[0] >= 1:
      robot[0] = 1
      belt[0] -= 1

stage = 1
# 메인 함수
while True:
   
   rotatedBelt,rotatedRobot = rotate(belt,robot)
   remove(rotatedBelt,rotatedRobot)

   move(rotatedBelt,rotatedRobot)
   remove(rotatedBelt,rotatedRobot)

   add(rotatedBelt,rotatedRobot)

   belt = rotatedBelt
   robot = rotatedRobot

   if belt.count(0) >= K:
      print(stage)
      break
   else:
       stage+=1