from sys import stdin as s
from collections import deque
import os

dir = os.path.dirname(os.path.realpath(__file__))+"/1260.txt"
s=open(dir,"rt")

v,e,start = map(int,s.readline().strip().split())


graph = [[] for i in range(v+1)]
for i in range(e):
    a,b = map(int,s.readline().split())
    graph[a].append(b)
    graph[b].append(a)

    
def BFS(start,graph):
    visited = [0 for i in range(v+1)]
    visited[0] = 1
    for i in range(len(graph)):
        graph[i].sort()

    queue = deque()
    queue.append(start)
    visited[start] = 1
    answer = []

    while queue:
        cur = queue.popleft()
        answer.append(cur)
        for i in graph[cur]:
            if not visited[i]:
                queue.append(i)
                visited[i] = 1
    print(*answer,sep=" ")


visited = [0 for i in range(v+1)]
visited[0] = 1
for i in range(len(graph)):
    graph[i].sort()
answer = []
def DFS(start,graph,visited):
    visited[start] = 1
    answer.append(start)
    for i in graph[start]:
        if not visited[i]:
            DFS(i,graph,visited)
DFS(start,graph,visited)
print(*answer,sep=" ")
BFS(start,graph)
