## ES6-Babel-Browserify模块化教程

### 0. ES6模块化语法

```
暴露模块：
	- 分别暴露：export 暴露内容
	- 统一暴露：export {xxx, yyy} 
	- 默认暴露：export default 暴露内容

引入模块：
	- 默认暴露的引入：import xxx from './xxx'
		- 几乎所有的第三方模块都用默认暴露的方式
	- 分别暴露和统一暴露的引入：import {xxx, yyy} from './xxx' 
		- 必须加{}
```



### 1. 创建项目结构
  ```
  |-js
    |-src
      |-module1.js
      |-module2.js
      |-module3.js
      |-app.js
  |-index.html
  |-package.json
    {
    "name" : "es6-modular-0719",
    "version" : "1.0.0"
  }
  ```

### 2. 安装babel-cli, babel-preset-es2015和browserify:

```
babel的两大作用：1. es6 -> es5 ; 2. jsx -> js
浏览器不认识ES6对象结构赋值语法，故安装babel。

第一步，全局安装：npm install babel-cli browserify -g 
第二步，局部安装：npm install babel-preset-es2015
备注：若全局已经安装过browserify，可以在第一步中去除browserify
```

​	

### 3. 创建.babelrc文件(给babel指定具体的任务)，内容如下：
```js
{
   "presets": ["es2015"]
}
```

### 4. 编码
  * js/src/module1.js
    ```js
    //分别暴露
    export function foo() {
      console.log('module1 foo()');
    }
    export function bar() {
      console.log('module1 bar()');
    }
    export const DATA_ARR = [1, 3, 5, 1]
    ```
  * js/src/module2.js  
    ```js
    //统一暴露
    let data = 'module2 data'
    
    function fun1() {
      console.log('module2 fun1() ' + data);
    }
    
    function fun2() {
      console.log('module2 fun2() ' + data);
    }
    
    export {fun1, fun2}
    ```
  * js/src/module3.js
    ```js
    //默认暴露
    export default {
      name: 'Tom',
      setName: function (name) {
        this.name = name
      }
    }
    ```

  * 下载jQuery模块: ```npm install jquery --save```
  
  * js/src/app.js
    ```js
    import {foo, bar} from './module1'
    import {DATA_ARR} from './module1'
    import {fun1, fun2} from './module2'
    import person from './module3'
    
    import $ from 'jquery'
    
    $('body').css('background', 'red')
    
    foo()
    bar()
    console.log(DATA_ARR);
    fun1()
    fun2()
    
    person.setName('JACK')
    console.log(person.name);
    ```

### 5. 编译源代码（确保已进入06_ES6_Babel_Browserify所在文件夹）
  * 第一步：使用Babel将ES6编译为ES5代码
            命令为: ```babel js/src -d js/build```
  * 第二步：使用Browserify编译js上一步生成的js
            命令为: ```browserify js/build/app.js -o js/build/build.js```
  * 备注：第一步操作后Babel将es6的模块化语法，转换成了CommonJS模块化语法（浏览器不识别），所以需要第二步用Browserify再次编译。

### 6. 页面中引入测试
  ```js
  <script type="text/javascript" src="js/build/build.js"></script>
  ```
