class Person:
    # 划分依据：方法的第一个参数必须要接收的数据类型
    # 实例方法
    def eat(self,food):  # 第一个参数接收一个实例
        print("吃",self,food)

    # 装饰器的作业：在保证原本函数不改变的前提下，直接给这个函数增加一些功能
    @classmethod  # 装饰器
    def leiff(cls):  # 第一个参数接收一个类
        print("这是一个类方法",cls)

    @staticmethod
    def jingtaiff():
        print("这是一个静态方法")


p = Person()
p.eat('西瓜')  # 吃 <__main__.Person object at 0x000001D111E61310> 西瓜

Person.leiff()  # 这是一个类方法 <class '__main__.Person'>
p.leiff()  # 这是一个类方法 <class '__main__.Person'>
f = Person.leiff
f()  # 这是一个类方法 <class '__main__.Person'>


# 延申类
class A(Person):  # A是Person的子类
    pass


A.leiff()  # 这是一个类方法 <class '__main__.A'>

Person.jingtaiff()  # 这是一个静态方法


