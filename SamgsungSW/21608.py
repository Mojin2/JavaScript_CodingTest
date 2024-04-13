from sys import stdin as s
from collections import deque
import os

dir = os.path.dirname(os.path.realpath(__file__))+"/21608.txt"
s=open(dir,"rt")

# 옵션 설정
N = int(s.readline())
arr = [list(map(int,s.readline().split())) for _ in range(pow(N,2))]
board = [[0]*N for _ in range(N)]
# 동 북 서 남
dx = (0,-1,0,1)
dy = (1,0,-1,0)

close = [[0]*N for _ in range(N)]
# 메인 함수
for data in arr:
    target = data[0]
    list = data[1:]
    # [9,8,1,2,3]
    # 조건 1 : 비어있는 칸 중에서 좋아하는 학생이 인접한 칸에 가장 많은 칸
    tmp = []
    maxCount = 0
    for x in range(len(board)):
        for y in range(len(board[x])):
            if board[x][y] == 0:
                count = 0
                empty = 0
                for k in range(4):
                    nx = x + dx[k]
                    ny = y + dy[k]
                    if 0<=nx<N and 0<=ny<N:
                        if board[nx][ny] == list[0]:
                            count += 1
                        if board[nx][ny] == list[1]:
                            count += 1
                        if board[nx][ny] == list[2]:
                            count += 1
                        if board[nx][ny] == list[3]:
                            count += 1
                        if board[nx][ny] == 0:
                            empty += 1
                maxCount = max(maxCount,count)
                tmp.append([x,y,count,empty])
    tmp2 = []
    for i in range(len(tmp)):
        if tmp[i][2] == maxCount:
            tmp2.append(tmp[i])
    tmp3 = []
    maxEmpty = 0
    for i in range(len(tmp2)):
        maxEmpty = max(tmp2[i][3],maxEmpty)
    for i in range(len(tmp2)):
        if tmp2[i][3] == maxEmpty:
            tmp3.append(tmp2[i])
    # 조건 1번
    if len(tmp2) == 1:
        x,y,count,empty = tmp2[0]
        board[x][y] = target
        close[x][y] = list
        # print(target,board)
        continue
    
    # 조건 2번
    if len(tmp3) == 1:
        x,y,count,empty = tmp3[0]
        board[x][y] = target
        close[x][y] = list
        # print(target,board)
        continue

    # 조건 3번
    if len(tmp3) >= 2:
        x,y,count,empty = tmp3[0]
        board[x][y] = target
        close[x][y] = list
        # print(target,board)
        continue

answer = 0

for i in range(len(board)):
    for j in range(len(board[i])):
        check = 0
        student = board[i][j]
        friends = close[i][j]

        for k in range(4):
            nx = i + dx[k]
            ny = j + dy[k]
            if 0<=nx<N and 0<=ny<N:
                if board[nx][ny] == close[i][j][0]:
                    check +=1
                if board[nx][ny] == close[i][j][1]:
                    check +=1
                if board[nx][ny] == close[i][j][2]:
                    check +=1
                if board[nx][ny] == close[i][j][3]:
                    check +=1
        if check == 0:
            answer += 0
        elif check == 1:
            answer += 1
        elif check == 2:
            answer += 10
        elif check == 3:
            answer += 100
        elif check == 4:
            answer += 1000

print(answer)

