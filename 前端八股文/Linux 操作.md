# Linux运维

root

123456

## 一、远程连接虚拟机

```
ip addr 查看ip地址
ssh 用户名@ip
ssh root@ip
```

## 二、Linux命令

绝对路径：==一切从根目录开始的路径==

```
比如：
/opt/one.text
```

相对路径：==不是以根目录开头的路径==

```
比如：
./opt/two.text
```

#### 1、Linux常用命令

```
whoami   查看当前系统用户是谁
ls /root   查看根目录下的root文件夹中的内容
cd 目录    切换目录
cd -    回到上一次的工作目录
pwd    查看当前目录
mkdir 参数 目录    创建文件夹
touch 目录/文件    创建文件
rm 参数 目录     删除（-rf 表示递归，强制删除所有）
mv 原文件目录/文件名 修改后文件目录/文件名      修改文件名
```

#### 2、Linux文件权限查看

Linux系统支持多个用户，同时登录以及操作

```
登录root用户：
useradd 用户名   创建用户
passwd 用户名   添加密码
再使用新用户远程连接虚拟机
```

![image-20230302141059334](Linux%20%E6%93%8D%E4%BD%9C/image-20230302141059334.png)

第一个rw表示==qfl用户==权限，第二个rw表示==qfl组==权限，第三个rw表示==除了qfl以外的角色==权限

第一个qfl表示这个文件==属于谁==，第二个qfl表示这个文件属于==哪个组==

```
文件权限语法：
rwx read write x (允许读取，允许写入，允许执行)
r-x read - x (运行读取，不允许写入，允许执行)
```

#### 3、Linux的文件编辑 vim

使用qfl用户登录

```
1、vi打开文件
vi 目录/文件名

2、输入指令，写入内容
输入 i 进入编辑模式

3、保存写入，退出vi文本编辑器
按下 ecs建
输入：
再输入 wq!  表示写入内容保存，退出编辑器，强制退出
回车

4、查看文本内容
cat 目录/文件名

:set nu显示行号
```

其他用户（除了root用户）不能编辑此文件，只能查看

```
为其他用户添加该文件权限：
chmod 777 目录/文件名

文件的操作权限
r  可读   4
w  可写   2
x  可执行  1

对于文件有3个角色可操作
用户  用户组  其他人

777 表示文件最大化权限

去掉其他人的权限
chmod 770 /tmp/first.text
```

## 三、Linux软件安装篇

```
windows提供了很多xx安装工具，如软件管家，可以让用户一键下载安装
Linux有提供了软件管理工具，名字叫做yum工具，也能自动帮助下载软件包，如qq.rpm，并且可以自动安装，使用
```

```
yum install qq -y  #表示自动搜索qq这个软件包且安装（必须确保yum仓库有qq这个软件）
```

阿里云yum仓库：[https://developer.aliyun.com/mirror/]()

使用yum安装软件：

```
1、配置一个软件仓库，阿里云yum源
2、通过yum命令，直接安装应用程序
```

```
1、先安装一个工具，wget
yum install wget -y

2、备份旧的yum源文件配置
cd etc/yum.repos.d
mkdir repo-bak
mv ./*  ./repo-bak/
ls

3、下载阿里云yum源
wget -O /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo

4、下载epel源
wget -O /etc/yum.repos.d/epel.repo https://mirrors.aliyun.com/repo/epel-7.repo

5、检查阿里云的yum软件仓库配置文件
ls /etc/yum.repos.d/

6、选择安装应用程序
yum install nginx -y  (安装nginx)

7、启动nginx应用程序
systemctl start nginx
停止nginx服务：systemctl stop nginx

8、验证nginx是否正确启动，如何检查机器的进程信息，以及端口信息

# 检查进程命令 ps
ps -ef 列出进程信息
# Linux的过滤命令，以及管道符号用法
# 将第一个命令结果，再交给第二个命令去二次加工
# 查询nginx进程并且只显示nginx相关的信息
# grep命令用于搜索、过滤某些信息
ps -ef | grep "nginx"

# 查看端口信息
# nginx默认使用80端口
yum install netstat
netstat -tunlp | grep "nginx"
```

访问nginx服务页面：

```
语法：机器ip地址：80端口
清空防火墙规则：iptables -F
关闭防火墙：systemctl stop firewalld
systemctl disable firewalld
```

![image-20230302160823409](Linux%20%E6%93%8D%E4%BD%9C/image-20230302160823409.png)

修改网站显示的内容：

```
# 利用curl命令，发起http请求，并且验证对方网站的信息
# 如查看淘宝网的web服务器信息
curl -I http://www.taobao.com/
结果：
[root@localhost yum.repos.d]# curl -I http://www.taobao.com/
HTTP/1.1 301 Moved Permanently
Server: Tengine

#查看自己的Linux服务器的信息
curl -I 192.168.137.128
结果：
[root@localhost yum.repos.d]# curl -I 192.168.137.129
HTTP/1.1 200 OK
Server: nginx/1.20.1
```

修改nginx首页：

```
查看nginx的安装文件，路径信息
[root@localhost yum.repos.d]# rpm -ql nginx
只找出index相关信息
[root@localhost yum.repos.d]# rpm -ql nginx | grep "index"
结果：
/usr/share/nginx/html/index.html

安装vim编辑器，vim是一个提供颜色区分以及更多强大功能的编辑器
yum install vim -y

修改首页文件内容:
1、打开网页：
vim /usr/share/nginx/html/index.html
2、使用vi编辑器
（按下dG表示清空内容，dd表示删除一行）
```

## 四、LAMP架构

==Linux== + ==Apache(Nginx)== + ==MySql== + ==应用程序==(后端Php/Python/Java等)

#### 1、快速部署LAMP架构

```
1、停止以及卸载nginx应用程序
[root@localhost yum.repos.d]# yum remove nginx -y

2、部署apache服务器
安装apache这个web服务器：
[root@localhost yum.repos.d]# yum install httpd
启动apache：
[root@localhost yum.repos.d]# systemctl start httpd
查看apache端口：
[root@localhost yum.repos.d]# netstat -tunlp | grep httpd
tcp6       0      0 :::80                   :::*                    LISTEN      1826/httpd  
```

![image-20230302215208200](Linux%20%E6%93%8D%E4%BD%9C/image-20230302215208200.png)

```
3、安装mysql数据库
[root@localhost yum.repos.d]# yum install mariadb-server mariadb -y

启动数据库：
[root@localhost yum.repos.d]# systemctl start mariadb

查看数据库端口：
[root@localhost yum.repos.d]# netstat -tunlp | grep "mysql"
tcp        0      0 0.0.0.0:3306            0.0.0.0:*               LISTEN      2157/mysqld 

使用mysql数据库：
[root@localhost yum.repos.d]# mysql -uroot -p
# 默认没有密码
[root@localhost yum.repos.d]# mysql -uroot -p
Enter password: 
Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is 3
Server version: 5.5.68-MariaDB MariaDB Server

Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

MariaDB [(none)]> 
MariaDB [(none)]> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| test               |
+--------------------+
4 rows in set (0.00 sec)

# 退出mysql
MariaDB [(none)]>exit
```

```
4、部署php结合apache

```

# Ansible自动化运维

ansible是一个同时管理多个远程主机的软件，必须是任意可以通过ssh登录的机器。

ansible是基于Python开发的，主要由Python的两个ssh处理模块，paraamiko以及PyYAML模块。

