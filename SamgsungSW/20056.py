from sys import stdin as s
from collections import deque
import os

dir = os.path.dirname(os.path.realpath(__file__))+"/20056.txt"
s=open(dir,"rt")

# 기본 옵션 설정
N,M,K = map(int,s.readline().split()) # N x N , M개의 파이어볼 , K번 명령
arr = [list(map(int,s.readline().split())) for i in range(M)] # x, y, m, s, d
board = [[0]*N for i in range(N)]

# 8방향 설정
dx = (-1,-1,0,1,1,1,0,-1)
dy = (0,1,1,1,0,-1,-1,-1)

   
# 파이어볼의 이동
def move(data):
    x,y,m,s,d = data
    nx = (x + dx[d] *s) %N
    ny = (y + dy[d] *s) %N
    return (nx,ny)
merge = 0
# 메인 함수
for _ in range(K):
    # 파이어볼의 이동 및 board 칸마다 파이어볼 수 저장
    for fireball in arr:
        nx,ny = move(fireball)
        fireball[0] = nx
        fireball[1] = ny
        tmp = [1,nx,ny,fireball[2],fireball[3],[fireball[4]]]
        if board[nx-1][ny-1]:
            original = board[nx-1][ny-1]
            for i in range(len(tmp)):
                if i == 1 or i ==2:
                    continue
                else:
                    board[nx-1][ny-1][i] = tmp[i] + original[i] # [count,x,y,m,s,d[]]
        else:
            board[nx-1][ny-1] = tmp
    newFireball = []
    # board를 돌며 파이어 볼이 2개 이상인곳 체크
    for i in range(N):
        for j in range(N):
            if board[i][j] !=0:
                if board[i][j][0] ==1:
                    count,x,y,m,s,d = board[i][j]
                    newFireball.append([x,y,m,s,d[0]])
                elif board[i][j][0] >=2:
                    count,x,y,m,s,d = board[i][j]
                    m = m//5 # 질량
                    if m == 0:
                        continue
                    s = s//count # 속력
                    direction = []
                    for k in range(len(d)):
                        d[k] = d[k] % 2
                    if d.count(0) == len(d) or d.count(1) == len(d):
                        direction = [0,2,4,6]
                    else:
                        direction = [1,3,5,7]
                    for v in direction:
                        newFireball.append([x,y,m,s,v])
    tmpCount = 0 
    for i in range(len(newFireball)):
        tmpCount += newFireball[i][2]

    merge = tmpCount
    arr = newFireball
    board = [[0]*N for i in range(N)]


print(merge)



