# s = list(input())
# i = 0
# while i < len(s):
#     if s[i] == '\t' or s[i] == ' ':
#         s.remove(s[i])
#         i -= 1
#     else:
#         break
#     i += 1
# j = len(s)-1
# print(s)
# while j >= 0:
#     if s[j] == '\t' or s[j] == ' ':
#         s.remove(s[j])
#     else:
#         break
#     j -= 1
# print(''.join(s))

# s = input()
# print(s.strip(),s.lstrip(),s.rstrip())

# x = input()
# y = int(input())
# d = {}
# d[x] = y
# while x != 'False':
#     x = input()
#     if x != 'False':
#         y = int(input())
#         d[x] = y
#     else:
#         break
# print(d)
# sum0 = 0
# for i in d:
#     sum0 += d[i]
# for i in d:
#     if i == 'A':
#         d[i] = d[i] * 4
#     elif i == 'B':
#         d[i] = d[i] * 3
#     elif i == 'C':
#         d[i] = d[i] * 2
#     elif i == 'D':
#         d[i] = d[i] * 1
# sum = 0
# for i in d:
#     sum += d[i]
# print('%.2f'%(sum/sum0))

# t1 = (1,2,3,4)
# t2 = (5,6,7,8)
# print(t1 + t2)  # (1, 2, 3, 4, 5, 6, 7, 8)
# print(t1 + (t2,))  # (1, 2, 3, 4, (5, 6, 7, 8))


# lst = []
# while True:
#     s = input()
#     if s != '0':
#         lst.append(s)
#     else:
#         break
# print(' '.join(lst))


# class Student:
#     name = ''
#     num = ''
#     sorce = 0
#     lst = []
# stu = Student()
# stu.name = input()
# stu.num = input()
# stu.sorce = int(input())
# stu.lst = list(map(str,input().split(" ")))
# print(stu.name +' \'s student number is '+stu.num+', and his grade is '+stu.num+'. He submitted 3 assignments, each with a grade of '+''.join(stu.lst))


# x,y = list(map(int,input().split(" ")))
# x2,y2 = map(int,input().split(" "))
# print(x,y)
# print(x2,y2)


# 力扣：求列表最大公共子窜
# strs = list(map(str,input().split(" ")))
strs = ["acc","aaa","aaba"]
m = len(strs[0])
c = 0
s = ""
for i in strs:
    if len(i) < m:
        m = len(i)
lis = strs[0]
for i in range(len(strs) - 1):
    ls = []
    for j in range(m):
        a = lis[j]
        b = strs[i + 1][j]
        if lis[j] == strs[i + 1][j]:
            c += 1
            ls.append(strs[0][j])
            j += 1
        else:
            c = 0
            break
    i += 1
    if ls:
        lis = ls
        m = len(lis)
    else:
        lis = []
        break
print(''.join(lis))


