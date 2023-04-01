# 一、Git常用命令

https://www.bilibili.com/video/BV1vy4y1s7k6/?spm_id_from=333.1007.top_right_bar_window_default_collection.content.click&vd_source=20ff2596c950c4aae1efdb8471c23bb6

1、设置用户签名

```
git config --global user.name 用户名 qfl
git config --global user.email 邮箱 123456@qq.com
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

8、修改文件名

```
mv 原文件名 新文件名
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

1、查看当前所有的远程地址别名

```
git remote -v
```

2、创建/删除别名(本地文件夹git init后和远端仓库关联)

```
git remote add 别名 仓库地址(git@github.com:qingfangli/仓库名.git)
git remote remove 别名
```

3、推送本地分支到远程仓库

```
git push 别名 分支
```

4、拉取远程库到本地库

```
git pull 别名 分支
```

5、克隆

先删除凭据管理器中的Windows凭据

克隆不需要登录账号

克隆会1、拉取代码 2、初始化本地仓库 3、创建别名origin

```
git clone 仓库地址
```



**ssh免密登录，生成ssh密钥目录：**

```
1、删除C:\Users\11630\.ssh目录
2、在C:\Users\11630目录下Git Bash
3、ssh-keygen -t raa -C git账号（1093996321@qq.com）
4、敲三次回车,会生成新的ssh文件
5、拿到shh文件中id_rsa.pub中的公钥，添加到github中个人中心setting中SSH Keys中
```

**报错解决方法：**

```
1、fatal: unable to access 'https://github.com/qingfangli/Exp01.git/': Failed to connect to github.com port 443 after 21045 ms: Timed out

git config --global http.sslVerify false

2、删除了远程仓库文件并创建了新文件报错（如修改文件名时）
先拉取pull下来，在推送push
To https://github.com/qingfangli/Exp01.git
 ! [rejected]        master -> master (fetch first)
error: failed to push some refs to 'https://github.com/qingfangli/Exp01.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.

git pull exp01 master --allow-unrelated-histories

```

