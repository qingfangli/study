# 经典类：没有继承（object)
# 新式类：继承（object）

# Python2.x 如果定义一个类，没有显示的继承自object，那么这个类就是一个经典类
# 必须显示继承自object它才是一个新式类
# Python3.x 如果直接定义一个类，会隐式的继承object，默认情况下，就已经是一个新式类

# 定义类
# class Money:
#     pass
#
# # 复制类
# x = Money
# print(x)  # <class '__main__.Money'>
# print(x.__name__)  # Money
#
# # 改类名
# # Money = 88
# # print(Money)  # 88
#
# # 根据类实例化对象
# print(Money.__name__)  # Money
# print(Money)  # 类 <class '__main__.Money'>
#
# a = Money()
# print(a)  # 对象 <__main__.Money object at 0x00000202ADDBC160>
# print(a.__class__)  # <class '__main__.Money'>

"""
# 对象属性
# 1、定义一个类
class Person:
    pass

# 2、根据类，创建一个对象
p = Person()

# 3、给对象添加一些属性
p.age = 18
p.height = 100

# 4、验证是否添加成功
print(p.age)  # 18
print(p.__dict__)  # {'age': 18, 'height': 100} 当前对象所有的属性

# 修改属性值
p.pets = [1,2,3]
print(p.pets,id(p.pets))  # [1, 2, 3] 2612170411456
p.pets.append(4)
print(p.pets,id(p.pets))  # [1, 2, 3, 4] 2612170411456
p.pets = [6,7,8]
print(p.pets,id(p.pets))  # [6, 7, 8] 2612170744896

# 删除属性
del p.height
print(p.__dict__)  # {'age': 18, 'pets': [6, 7, 8]}
"""


# 类属性
class Money:
    pass


# 1、给类添加属性
# 方法1
Money.count = 1
print(Money.count)  # 1
print(Money.__dict__)  # {'__module__': '__main__', '__dict__': <attribute '__dict__' of 'Money' objects>,
# '__weakref__': <attribute '__weakref__' of 'Money' objects>, '__doc__': None, 'count': 1}


# 方法2
class Dogs:
    age = 18
    count = 1
    number = 3


print(Dogs.age)  # 18
print(Dogs.__dict__)  # {'__module__': '__main__', 'age': 18, 'count': 1, 'number': 3,
# '__dict__': <attribute '__dict__' of 'Dogs' objects>, '__weakref__': <attribute '__weakref__' of 'Dogs' objects>, '__doc__': None}

# 2、查询属性
one = Dogs()


# 限制类属性添加
class Pp:
    __slots__ = ["age",'num']
    pass
