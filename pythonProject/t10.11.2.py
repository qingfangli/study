# def romanToInt(self, s: str) -> int:
#     n = 0
#     if 'IV' in s:
#         n += 4
#         s.replace('IV','')
#     elif 'IX' in s:
#         n += 9
#         s.replace('IX','')
#     elif 'XL' in s:
#         n += 40
#         s.replace('XL','')
#     elif 'XC' in s:
#         n += 90
#         s.replace('XC','')
#     else:
#         for i in s:
#             if i == 'I':
#                 n += 1
#             elif i == 'V':
#                 n += 5
#             elif i == 'X':
#                 n += 10
#     return n
#
# romanToInt('II')
# print(romanToInt('II'))
s = 'II'
n = 0
if 'IV' in s:
    n += 4
    s.replace('IV', '')
elif 'IX' in s:
    n += 9
    s.replace('IX', '')
elif 'XL' in s:
    n += 40
    s.replace('XL', '')
elif 'XC' in s:
    n += 90
    s.replace('XC', '')
else:
    for i in s:
        if i == 'I':
            n += 1
        elif i == 'V':
            n += 5
        elif i == 'X':
            n += 10
print(n)