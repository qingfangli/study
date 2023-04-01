# 元类 type
num = 1
print(num.__class__.__class__)  # <class 'type'>
print(int.__class__)  # <class 'type'>
print(type.__class__)  # <class 'type'>


def run(self):
    """

    :param self:
    :return:
    """
    print(self)


xxx = type("Dog",(),{'count':0,'run':run})
print(xxx)  # <class '__main__.Dog'>

d = xxx()
print(d)  # <class '__main__.Dog'>
