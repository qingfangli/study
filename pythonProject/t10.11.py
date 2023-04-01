# s = input()
# nums = s[0:len(s)-2]
# target = int(s[len(s)-1])
# ls = []
# for i in nums:
#     if i.isdecimal():
#         ls.append(i)
# # print(nums,target)
# # print(nums)
# lst = []
# # for i in range(len(ls)-1):
# #     for j in range(1,len(ls)):
# #         if int(ls[i])+int(ls[j]) == target:
# #             lst.append(i)
# #             lst.append(j)
# # print(lst)
# list = []
# for i in ls:
#     if target-int(i) not in lst:
#         lst.append(int(i))
#     else:
#         list.append(ls.index(str(target - int(i))))
#         ls.remove(i)
#         list.append(ls.index(i)+1)
#
# print(list)


# 元组与列表的区别：元组是不可变的，不可添加元素，列表是可变的，可以添加元素
# t1 = ('1','1',[1,2])
# t1[2].append(3)
# print(t1)
# t2 = tuple()

s = 'III'
n = 0
while True:
    if 'IV' in s:
        n += 4
        s = s.replace('IV', '')
    elif 'IX' in s:
        n += 9
        s = s.replace('IX', '')
    elif 'XL' in s:
        n += 40
        s = s.replace('XL', '')
    elif 'XC' in s:
        n += 90
        s = s.replace('XC', '')
    elif 'CD' in s:
        n += 400
        s = s.replace('CD', '')
    elif 'CM' in s:
        n += 900
        s = s.replace('CM', '')
    else:
        break
for i in s:
    if i == 'I':
        n += 1
    elif i == 'V':
            n += 5
    elif i == 'X':
        n += 10
    elif i == 'L':
        n += 50
    elif i == 'C':
        n += 100
    elif i == 'D':
        n += 500
    elif i == 'M':
        n += 1000
print(n)
