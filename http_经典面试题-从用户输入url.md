### 问题：从用户输入URl按下回车，一直到用户能看到界面，期间经历了什么？

```
一、DNS解析----域名翻译成IP地址（优先走缓存）：

   1.找浏览器DNS缓存解析域名

   2.找本机DNS缓存：(备注：查看本机DNS缓存命令：ipconfig/displaydns > C:/dns.txt)

   3.找路由器DNS缓存

   4.找运营商DNS缓存（80%的DNS查找，到这一步就结束）

   5.递归查询 (查询全球13台根DNS服务器)


 二、进行TCP（协议）连接，三次握手（根据上一步请求回来的ip地址，去联系服务器）

   第一次握手：由浏览器发给服务器，我想和你说话，你能“听见”嘛？

   第二次握手：由服务器发给浏览器，我能听得见，你说吧！

   第三次握手：由浏览器发给服务器，好，那我就开始说话。


 三、发送请求（请求报文）


 四、得到响应（响应报文）


 五、浏览器开始解析html

        --预解析：将所有外部的资源，发请求出去

        --解析html，生成DOM树

        --解析CSS，生成CSS树

        --合并成一个render树

        --js是否操作了DOM或样式

          --有：进行重绘重排（不好，1.尽量避免；2.最小化重绘重排）

          --没有：null

        --最终展示界面


 六、断开TCP连接，四次挥手（确保数据的完整性）

        第一次挥手：由浏览器发给服务器，我的东西接受完了，你断开吧。

        第二次挥手：--由服务器发给浏览器，我还有一些东西没接收完，你等一会，我接收好了且验证好了我告诉你

             	  --由服务器发给浏览器，我的东西接收完了，但是你还得等一会，我要验证数据的完整性，验证完了我告诉你。

        第三次挥手：由服务器发给浏览器，我接收完（验证完）了，你断开吧。

        第四次挥手：由浏览器发给服务器，好的，那我断开了。


 备注：为什么握手要三次，挥手要四次？

    握手之前，还没有进行数据的传输，确保握手就可以了。

    挥手之前，正在进行数据的传输，为了确保数据的完整性，必须多经历一次验证（继续接收）
```

