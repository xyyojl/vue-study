### vue第一天复习

- vm => viewModel 数据最终都会被vm所代理

- {{a}} 取值表达式，通过{{}}来进行取值，**默认可以不写this**，没人写，表达式 赋值运算 计算 三元表达式尽量少写逻辑（computed）（尽量不要在html里使用三元表达式）

- 指令：dom元素的行间属性，vue提供了内置的指令，必须v-开头，`v-model='a'`后面的值**均为变量**

  - v-model（表单元素）忽略掉value，checked，selected，将数据绑定的视图上，视图修改后会影响数据的变化
  - v-text 取代 {{}}  v-cloak **解决闪烁（块）问题**，后期都可以不采用，使用v-cloak**要加样式**，了解一星期即可
  - v-once 绑定一次，数据在变化不会导致视图刷新，卸载不想刷新的标签上
  - v-html 将html字符串转化成html
  - v-for 循环（数组，对象，字符串，数字）

  ```html
  <div v-for="value in/of 数组"></div>
  <div v-for="(value,index) in/of 数组"></div>
  ```

- 事件v-on(@)

  - 绑定给dom元素，函数需要定义在methods中，不能和data里的内容重名，this指向的是实例，不能使用箭头函数，事件源对象如果不写括号，可以自动传入，否则只能手动传入$event

  ```html
  <div @事件名="fn"></div>
  ```


### checkbox

> 如果是复选框，只有一个复选框的时候，会把此值转化成boolean类型，如果true则代表被选中
>
> 如果是多个checkbox,要增加value属性并且数据类型是数组 

```html
<div id="app">
    <input type="checkbox" v-model="a">{{a}}<br>
    爱好<input type="checkbox" v-model="b" value="游泳">游泳
    <input type="checkbox" v-model="b" value="爬山">爬山
    <input type="checkbox" v-model="b" value="睡觉">睡觉
    {{b}}
    <!-- 默认根据v-model 进行分组 -->
</div>
<script src="./node_modules/vue/dist/vue.js"></script>
<script>
    let vm = new Vue({
        el : '#app',
        data : {
            a : false,
            b:[]
            // b:true
        }
    })
</script>
```

### select

> 如果value属性不写默认取的是option中的值,请选择这一项要加disabled
>
> 如果select是多选框 则数据类型要是数组类型才行

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        
        [v-cloak]{display: none;}
    </style>
</head>
<body>
    <div id="app" v-cloak>
        <select id="select" v-model='a' multiple>
            <option value="" disabled>请选择</option>
            <option value="1">你好</option>
            <option value="2">不好</option>
            <option value="3">我好</option>
        </select>
        {{a}}
        <input type="radio" v-model="gender" value="男">男
        <input type="radio" v-model="gender" value="女">女
        {{gender}}
        <!-- radio是通过v-model记性分组的，cvalue值对应的就是选择后的结果 -->
    </div>

    <script src="./node_modules/vue/dist/vue.js"></script>
    <script>
        let vm = new Vue({
            el : '#app',
            data : {
                // a : '',
                a : [],
                gender:'男'
            }
        })
    </script>

    <script>
        // 尝试使用原生JS来获取select的值
        /* let oSelect = document.getElementById('select');
        oSelect.onchange = function(){
            alert(this.value)
        } */
        // 下面的写法:**不能通过click事件获取option的值**
        /* let opts = oSelect.getElementsByTagName('option');
        console.log(opts)
        for (let i = 0; i < opts.length; i++) {
            opts[i].onclick = function(){
                alert(1)
            }
            
        } */
    </script>
</body>
</html>
```



使用vuetools插件



### axios的使用

新建一个文件cart.json，请求数据额

Vue给我们专门提供一个axios

### 如何理解promise





### 实现购物车的步骤

1. 先制造假数据，然后获取假数据
2. 循环假数据，放到表格里面
3. 实现删除功能



希望方法有复用性



```javascript
var arr = [{name:1},{name:2}];
var newObj = arr[0];
arr.forEach(item => console.log(item === newObj))
```








### 安装

在**项目目录下**安装 vue axios bootstarp（提供了一些插件，轮播图之类）

```
npm install vue axios bootstarp
```

安装bootstarp，出现了一个问题

![1550971621177](C:\Users\ASUS-PC\AppData\Roaming\Typora\typora-user-images\1550971621177.png)

解决办法：

[解决npm安装bootstrap 4 报错问题](https://blog.csdn.net/tongshuo_11/article/details/68485189)

如何获取select的值

![1550973859731](C:\Users\ASUS-PC\AppData\Roaming\Typora\typora-user-images\1550973859731.png)

[Vue.js devtool插件安装后无法使用，出现提示“vue.js not detected”的解决办法](http://www.cnplugins.com/tool/fix-vue-js-not-detected.html)