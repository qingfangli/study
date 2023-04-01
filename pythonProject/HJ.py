"""HJ36"""
key = input()
s = input()
d = {}
str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
ls = list(str)
lst = []
for i in key:
    if i not in lst:
        lst.append(i)
# ss = ''.join(lst)
for i in ls:
    if i not in lst and i.lower() not in lst:
        lst.append(i)
# print(lst)
lss = []
for i in s:
    if i.isupper():
        inde = ls.index(i)
        # print(inde)
        lss.append(lst[inde])
    elif i.islower():
        i = i.upper()
        inde = ls.index(i)
        lss.append(lst[inde].lower())
    elif i == " ":
        lss.append(i)
print(''.join(lss))




