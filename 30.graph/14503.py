from sys import stdin as s
from collections import deque
import os

dir = os.path.dirname(os.path.realpath(__file__))+"/14503.txt"
s=open(dir,"rt")

n,m  = map(int,s.readline().strip().split())
startX,startY,direction = map(int,s.readline().split())
# board = list(map(lambda x:list(map(int,x.split(" "))),s.read().split("\n")))
board = [list(map(int,s.readline().split())) for _ in range(n)]
# 반시계 90도 로테이트 순서 > 북 서 남 동
# 북 동 남 서
dx = (-1,0,1,0)
dy = (0,1,0,-1)

def outOfRange(x,y): # 범위를 벗어났는지 확인하는 함수
    return x<0 or y<0 or x>=n or y>=m
def rotate(number):
    if (number == 0):
        return 3
    else:
        return number-1
    
visited = [[0]*m for _ in range(n)]
queue = deque()
queue.append([startX,startY,direction]) # [x,y,direction]
count = 1 # 청소한 지역의 수
visited[startX][startY] = 1 # 시작 위치 청소처리
for i in range(len(board)):
    for j in range(len(board[i])):
        if board[i][j] == 1:
            visited[i][j] = 1

while queue:
    cx,cy,di = queue.popleft()
    tmp = []
    for i in range(4):
        nx = cx + dx[i]
        ny = cy + dy[i]

        if outOfRange(nx,ny):
            continue
        else:
            if not visited[nx][ny]:
                tmp.append([nx,ny])
    # 동서남북 범위 중에 청소되지 않은 빈칸이 있는 경우
    if tmp:
        dirNum = rotate(di)
        nx = cx + dx[dirNum]
        ny = cy + dy[dirNum]
        while True:
            if not outOfRange(nx,ny) and not visited[nx][ny]:
                break
            dirNum = rotate(dirNum)
            nx = cx + dx[dirNum]
            ny = cy + dy[dirNum]

        queue.append([nx,ny,dirNum])
        visited[nx][ny] = 1
        count+=1
    # 동서남북 범위 중에 청소되지 않은 빈칸이 없는 경우
    else:
        nx = cx - dx[di]
        ny = cy - dy[di]
        if (outOfRange(nx,ny)):
            break;
        else:
            if not visited[nx][ny]:
                visited[nx][ny] =1
                count+=1;
            queue.append([nx,ny,di])


print(count)
