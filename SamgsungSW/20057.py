from sys import stdin as s
from collections import deque
import os

dir = os.path.dirname(os.path.realpath(__file__))+"/20057.txt"
s=open(dir,"rt")

N = int(s.readline())
arr = [list(map(int,s.readline().split())) for _ in range(N)]
board = [[0]*N for i in range(N)]

originalSum = 0
for i in range(N):
    for j in range(N):
        originalSum += arr[i][j]
# 방향 전환
def nextDirection(direction):
    return (direction+1)%4
def prevDirection(direction):
    return (direction+3)%4

# 서쪽 (위, 우측, 좌측, 1,2,3,4)
dxW = (0,0,-1,-2,1,2,-1,-1,1,1)
dyW = (-1,-2,0,0,0,0,-1,1,1,-1)

# 북쪽
dxN = (-1,-2,0,0,0,0,-1,1,1,-1)
dyN = (0,0,1,2,-1,-2,1,1,-1,-1)

# 동쪽
dxE = (0,0,1,2,-1,-2,1,1,-1,-1)
dyE = (1,2,0,0,0,0,1,-1,-1,1)

# 남쪽
dxS = (1,2,0,0,0,0,1,-1,-1,1)
dyS = (0,0,-1,-2,1,2,-1,-1,1,1)

rate = (0,5,7,2,7,2,10,1,1,10)
# 모래 퍼뜨리기
def move(direction,x,y,arr):
    wastedSand = 0
    totalSand = arr[x][y] # 모래의 양
    arr[x][y] = 0
    movingSand = 0
    if direction == 0:
        dx,dy = dxW,dyW
    elif direction == 1:
        dx,dy = dxS,dyS
    elif direction == 2:
        dx,dy = dxE,dyE
    else:
        dx,dy = dxN,dyN

    for i in range(1,10):
        nx = x + dx[i]
        ny = y + dy[i]
        if 0<=nx<N and 0<=ny<N:
            arr[nx][ny] += int(totalSand * (rate[i]/100))
            movingSand += int(totalSand * (rate[i]/100))
        else:
            movingSand += int(totalSand * (rate[i]/100))
            wastedSand += int(totalSand * (rate[i]/100))
    for i in range(1):
        nx = x + dx[i]
        ny = y + dy[i]
        if 0<=nx<N and 0<=ny<N:
            arr[nx][ny] += totalSand - movingSand
        else:
            wastedSand += int(totalSand * (rate[i]/100))
    
    return wastedSand


def tornado(board):
    totalWastedSand = 0
    x,y = [int(N/2),int(N/2)]
    distance = 1
    distanceCount = 0
    idx = 1
    direction = 0
    board[x][y] = 0

    dx = (0,1,0,-1) # 서 남 동 북
    dy = (-1,0,1,0)

    while True:
        if x == 0 and y == -1:
            break        

        for _ in range(distance):
            nx = x + dx[direction]
            ny = y + dy[direction]
            x,y = nx,ny
            totalWastedSand += move(direction,x,y,board)
            idx += 1
        distanceCount += 1
        direction = nextDirection(direction)

        if distanceCount == 2:
            distance += 1
            distanceCount = 0


tornado(arr)
endSum = 0
for i in range(N):
    for j in range(N):
        endSum += arr[i][j]
print(originalSum-endSum)