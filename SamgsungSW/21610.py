from sys import stdin as s
from collections import deque
import os

dir = os.path.dirname(os.path.realpath(__file__))+"/21610.txt"
s=open(dir,"rt")

N,M = map(int,s.readline().split())
board = [list(map(int,s.readline().split())) for _ in range(N)]
data = [list(map(int,s.readline().split())) for _ in range(M)]


# 시작 구름 및 8방향 좌표 설정
clouds = [[N-1,0],[N-1,1],[N-2,0],[N-2,1]]
dx = (0,0,-1,-1,-1,0,1,1,1)
dy = (0,-1,-1,0,1,1,1,0,-1)

# 넘어가는 좌표에 대해서 수정
def editPosition(x,y):
    if x <0:
        x = N-1
    elif x >=N:
        x = 0
    
    if y <0:
        y = N-1
    elif y >=N:
        y = 0
    
    return (x,y)


# 구름이 움직이는 함수
def moveCloud(d,s,clouds):
    movedCloud = []
    for i in clouds:
        cx,cy = i
        for _ in range(s):
            nx = cx+dx[d]
            ny = cy+dy[d]
            cx,cy = editPosition(nx,ny)
        movedCloud.append([cx,cy])

    return movedCloud

# 대각선 체크하는 함수
def checkCloud(cloud,board):
    count = 0
    cx,cy = cloud
    ddx = (-1,-1,1,1) 
    ddy = (-1,1,1,-1)
    for i in range(4):
        nx = cx + ddx[i]
        ny = cy + ddy[i]
        if 0<=nx<N and 0<=ny<N and board[nx][ny] >0:
            count+=1
    
    return count

# 새로운 구름이 생기는 함수
def generateCloud(oldClouds,board,visited):
    newCloud = []
    for i in range(len(board)):
        for j in range(len(board[i])):
            if board[i][j] >=2 and visited[i][j] == 0:
                newCloud.append([i,j])
                board[i][j] -= 2
    return newCloud

# 메인 루프
for i in data:
    visited = [[0]*N for _ in range(N)]
    d,s = i
    movedclouds = moveCloud(d,s,clouds)
    # print("movedclouds: {}".format(movedclouds))
    for cloud in movedclouds:
        x,y = cloud
        board[x][y] += 1
        visited[x][y] = 1
    for cloud in movedclouds:
        x,y = cloud
        board[x][y] += checkCloud(cloud,board)
    newCloud = generateCloud(movedclouds,board,visited)

    clouds = newCloud
    # print("board: {}".format(board))
    # print("clouds: {}".format(clouds))
    # print("======================================")

answer = 0
for i in board:
    answer += sum(i)
print(answer)
