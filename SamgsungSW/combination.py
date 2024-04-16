num = [1,2,3]
k = 2

############# 순열과 조합 ##############
# 조합 순서상관 X
def combination(num,k):
    tmp = []
    answer = []
    
    def backtrack(cur):
        if len(tmp) == k:
            answer.append(tmp[:])
    
        for i in range(cur,len(num)):
            tmp.append(num[i])
            backtrack(i+1)
            tmp.pop()

    backtrack(0)
    return answer

# print(combination(num,k))

# 순열 순서상관 O
def permutation(num,k):
    tmp = []
    answer = []
    
    def backtrack():
        if len(tmp) == k:
            answer.append(tmp[:])
    
        for i in range(len(num)):
            if num[i] in tmp: continue
            tmp.append(num[i])
            backtrack()
            tmp.pop()

    backtrack()
    return answer

# print(permutation(num,k))


############# DFS ##############
# graph = [[], [2, 3], [5, 1], [4, 1], [5, 3], [4, 2]]
# for i in range(len(graph)):
#     graph[i].sort()
# V = len(graph)-1
# visited = [0]*(V+1)
# visited[0] = 1
# answer = []
# def DFS(start):
#     visited[start] = 1
#     answer.append(start)

#     for i in graph[start]:
#         if not visited[i]:
#             DFS(i)
    

# DFS(3)
# print(answer)

############# BFS ##############
# from collections import deque
# graph = [[], [2, 3], [5, 1], [4, 1], [5, 3], [4, 2]]
# for i in range(len(graph)):
#     graph[i].sort()
# V = len(graph)-1
# visited = [0]*(V+1)
# visited[0] = 1
# answer = []

# def BFS(start):
#     queue = deque()
#     queue.append(start)    
#     visited[start] = 1
#     answer.append(start)

#     while queue:
#         cur = queue.popleft()

#         for i in graph[cur]:
#             if not visited[i]:
#                 visited[i] = 1
#                 queue.append(i)
#                 answer.append(i)
    

# BFS(3)
# print(answer)