# Python并没有真正的私有化支持，但是，可以使用下划线完成私有效果(伪私有)
# x :公有属性
# _x :受保护的属性 模块内其他位置会报警告，不同模块不能访问
# __x :私有属性 只能在本类中访问，子类不可以

# x_ :与系统内置的关键字做区分
# __x__ :系统内置关键字

# 私有属性的实现机制：
# 名字重整 __x ——> _类名__x

class Person:
    # 主要作用：当我们创建好一个实例对象后，会自动的调用这个方法，来初始化这个对象
    def __init__(self):
        self.age = 18
        self.__num = 11  # 私有化(只读)

    @property  # 主要作用：可以以属性的方式，来使用这个方法（将一些”属性操作方法“关联到某一属性中）
    def getNum(self):
        return self.__num  # 部分公开


p1 = Person()
p1.age = 20
p2 = Person()
print(p1.age)  # 20
print(p2.age)  # 18
# print(p1.getNum())  # 11
print(p1.getNum)  # 11

