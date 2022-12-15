# 前置知识

## 1.  脚手架安装，介绍

 	1. vue3脚手架使用: 
       	1. 安装依赖: npm install @vue/cli -g
      	2. 初始化项目: vue create <projectName>
 	2. vue2脚手架使用
       	1. vue脚手架3使用的命令和vue2脚手架一样都是vue所以会覆盖之前的命令
      	2. 如果还想使用vue2的脚手架需要安装一个桥接
      	3. 安装桥接: npm install @vue/cli-init
      	4. 初始化项目: vue init webpack <projectName>

​	

## 2. vue配置，解决解析器配置问题

1. 说明地址:  https://cli.vuejs.org/zh/config/ 

2. 配置内容: vue.config.js

   ```js
   module.exports = {
     runtimeCompiler: true   // 解决控制台runtimeOnly...报错的问题
   }
   
   ```
   
3. 扩展：配置简写引入

   ```js
   let path = require('path');
   
   function resolve (dir) {
     return path.join(__dirname, dir)
   }
   
   module.exports = {
     configureWebpack: {// 当前配置需要写入该选项中
       resolve: {
         extensions: ['.js', '.vue', '.json'],
         alias: {
           'vue$': 'vue/dist/vue.esm.js', 
           '@': resolve('src'), // 设置文件查找路径，可简写文件查找路径
           'components': resolve('src/components'),
         }
       }
     }
   }
   ```

   

## 3. Eslint配置说明

1. package.json中逐条配置

   ```js
   "rules": {
         "no-console": 0 // 0 代表关闭，1代表警告，2代表检查报错
    },
   ```

   

2. vue.config.js中整体配置

   ```js
    // 关闭ESlint, 默认为true，编译后在控制台警告错误信息，但是不影响编译，
    // 设置为‘error’的时候在页面报错显示错误内容，设置为false关闭提示
    lintOnSave: false, 
   ```

## 4. stylus使用

### 4.1 stylus安装使用

```js
1. 本地使用: 全局安装 stylus:   npm install stylus -g
2. 脚手架中使用
        1. npm install stylus stylus-loader
        2. style标签设置: lang="stylus" rel="stylesheet/stylus"
```



### 4.2 stylus语法介绍

#### 特点

1. 简写大括号

2. 简写分号

3. 样式嵌套，层级明显

   ```js
   #app
       h1
         color $color
       .btn1
         btnStyle(100px, 100px, red)
       .btn2
         btnStyle(200px, 200px, blue)
       .content
         font-size 24px
         &.content1
           color $color
   ```


#### 定义变量：复用

```js
$color = red
```

#### 定义混合（mixins）：代码复用，提高效率，灵活度高，等同于js的函数

```js
 btnStyle(w, h, bg)
    width w
    height h
    background bg
    border none
```

#### 定义函数: 可进行计算，灵活度更高

```js
// 定义函数
add(a, b)
    a + b
// 使用函数
padding add(10px, 20)
```

#### 父级引用

1. 语法：&

2. 作用：在子元素中能够找到父级元素

   ```js
    #app
       h1
         color $color
       .btn1
         btnStyle(100px, 100px, red)
       .btn2
         btnStyle(200px, 200px, blue)
       .content
         font-size 24px
         &.content1
           color $color
   ```

#### 导入文件

   1. 语法: @import ''xx'

其他: [ https://stylus.bootcss.com/ ]()

## 5. 移动端适配

1. 为什么要做适配

   1. 机型不一样
   2. 屏幕大小不一样
   3. 屏幕的dpr不一样

2. 适配的终极目标

   1. 让一张设计稿的内容在不同的机型上呈现的效果一致
   2. 内容在不同的机型上 ‘等比’

3. 常用适配方案

   1. **viewport适配**

      ```js
      视口可分为：
      布局视口：网页的宽度（大部分手机设计为980px）
      视觉视口：设备宽度（iphone6为375px）
      完美视口：让布局视口=视觉视口
      ```

   2. **rem适配**

      ```js
      区分：
      rem: 根节点的字体大小 （html）
      em: 父节点的字体大小
      px: css像素单位
      ```

4. viewport适配

   1. 内容: 

      ```js
      <meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no">
      ```

   2. 目的

      让布局视口 = 视觉视口

      user-scalable=no： 禁止缩放

5. rem适配

   1. 原理: 

      1. 根据不同屏幕大小控制根节点rem字体大小
      2. 页面中的内容大小设置用rem从而达到适配的目的

   2. 原生代码实现

      ```js
      	function remRefresh() {
              // 1、获取屏幕宽度
              let clientWidth = document.documentElement.clientWidth
              // 2、将屏幕的宽度等分： 16 10 等分的目的： 1）降低单位rem值的大小便于换算 2）提高准确度
              let rem = clientWidth / 10
              // 3、设置根节点字体的大小
              document.documentElement.style.fontSize = 1 * rem + 'px'
              // 4、设置body字体的大小
              document.body.style.fontSize = '16px'
            }
      
            // 页面加载显示的事件
            window.addEventListener('pageshow', () => {
              remRefresh()
            })
      
            // 窗口大小改变的事件
            let timeoutId
            window.addEventListener('resize', () => {
              // 函数防抖
              !!timeoutId && clearTimeout(timeoutId)
              timeoutId = setTimeout(() => {
                console.log('resize')
                remRefresh()
              }, 300);
            })
      
      // 函数节流：某个事件在一定的时间内只执行一次
      // 函数防抖：某个事件被高频触发调用，只在结束触发后间隔一定时间执行一次
      ```

## 6. vue脚手架中使用第三方库适配（直接看vue3）

### 6.1 vue2脚手架

1. 安装依赖

   1. npm install px2rem-loader  lib-flexible --save 

2. 配置说明

   1. 在项目入口文件 main.js 里 引入 lib-flexible， flexible会自动根据设备情况动态设置rem的值的大小

   2. 在build文件夹下的util.js中添加

      ```js
      // *********************** 新增内容开始***********************************
      // 全局定义px2remLoader
      const px2remLoader = {
          loader: 'px2rem-loader',
          options: {
          remUnit: 37.5  // remUnit为转换rem的基础 设计稿单位/等分数 = remUnit
          }
      }
      // *********************** 新增内容结束***********************************
      
      // 在该函数的loaders中添加
       function generateLoaders (loader, loaderOptions) {
           // 添加使用 px2remLoader
      // *********************** 新增内容开始***********************************
           
           const loaders = options.usePostCSS ? [cssLoader, postcssLoader,px2remLoader] : [cssLoader, px2remLoader]
      // *********************** 新增内容结束***********************************
      
          if (loader) {
          loaders.push({
          loader: loader + '-loader',
          options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
          })
          })
          }
      
          // Extract CSS when that option is specified
          // (which is the case during production build)
          if (options.extract) {
          return ExtractTextPlugin.extract({
          use: loaders,
          fallback: 'vue-style-loader'
          })
          } else {
          return ['vue-style-loader'].concat(loaders)
          }
      }
      ```

      

### 6.2 vue3脚手架配置

```js
1. 安装依赖
   npm install postcss-px2rem  lib-flexible --save 

2. 配置说明
   1. 在项目入口文件 main.js 里 引入 'lib-flexible/flexible'， flexible会自动根据设备情况动态设置rem的值的大小
   2. 在vue.config.js中添加配置

    const px2rem = require('postcss-px2rem')
    // 配置postcs-px2rem
    const postcss = px2rem({
      remUnit: 37.5   // 设计稿等分之后的值，等分的比例同页面rem的比例是一致的
    })
    
    module.exports = {
      runtimeCompiler: true,  // 默认值为false,设置为true后包含运行时编译的vue版本，但会使文件额外增加10k左右
        					  // 不推荐使用，最好使用render
      lintOnSave: false, // 关闭Eslint的规则
      css: { // 添加postcss配置
        loaderOptions: {
          postcss: {
            plugins: [
              postcss
            ]
          }
        }
      },
    }
```











































