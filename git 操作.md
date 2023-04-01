# 一、Git常用命令

1、设置用户签名

```
git config --global user.name 用户名
git config --global user.email 邮箱
邮箱可以不是正确的邮箱
```

2、初始化本地库

```
git init
```

3、查看本地库状态

```
git status
```

4、添加暂存区

```
git add 文件名
```

5、提交本地库

```
git commit -m "日志信息" 文件名
```

6、查看版本号

```
git reflog  查看版本信息
git log  查看版本详细信息
```

7、版本穿梭

```
git reset --hard 版本号
```

# 二、Git分支

1、创建分支

```
git branch 分支名
```

2、查看分支

```
git branch -v
```

3、切换分支

```
git checkout 分支名
```

4、把指定的分支合并到当前分支

```
git merge 分支名
```

# 三、GitHub操作

1、拉取

```
git clone 仓库名
```

2、本地文件夹git init后和远端仓库关联

```
git remote add origin git@github.com:qingfangli/仓库名.git
```



