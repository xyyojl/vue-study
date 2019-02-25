- 箭头函数
- this指向
- 闭包
- Vue介绍
- Vue初始化
- defineProperty
- 基础指令
- 数据响应的变化
- 数组的循环v-for
- 事件
- 实现简易的todo
- 框架与库的区别

## 箭头函数

箭头函数 不具备this，arguments，自己家没有this 就找到上一级的this

使用箭头函数的用法：

>参数只有**一个参数**,可以去掉括号 
>
>去掉function 关键字 参数只有一个**可以省略小括号** **小括号**和**大括号**之间有一个箭头
>
>如果没有大括号则直接返回值 有大括号必须写return 有写return就必须写大括号

```js
// 下面将普通函数改写成箭头函数
//例子1
/* function a1(b) {
    return b+1;
} */
// ES 6 箭头函数
let a1 = b => b+1
console.log(a1(2));

//例子2
/* function a2(b){
    return function(c){
        return b + c;
    }
} */
// ES 6 箭头函数
let a2 = b => c => b+c  // 高阶函数 (>=两个箭头的)
console.log(a2(2)(2));
```

注：由于函数重名会报错，所以我将上面关于普通函数的代码注释啦！

## this指向

### 如何确定this指向

如何确定this是谁 看谁调用的 .前面是谁 this就是谁

#### 如何更改this指向

1. call apply bind

2. var that = this;

3. => 箭头函数

## 闭包

闭包: 函数执行的一瞬间叫闭包,(**不销毁的作用域**),当执行后返回的结果必须是引用类型, 

被外界变量接受 此时这个函数不会销毁(模块化)

例子：

```js
let a = function(b){
    return function(c){
        return b+c;
    }
}();
```

## Vue介绍

###  vue概述

Vue (读音 /vjuː/，类似于 **view**) 是一套用于构建用户界面的**渐进式框架**

### vue的特点

- 核心只关注视图层（view）
- 易学，轻量，灵活的特点
- 适用于移动端项目
- 渐进式框架

### 渐进式的理解

> vue全家桶 vue.js + vue-router(实现vue的单页面) + vuex(状态的管理) + axios(获取数据)
>
> 通过组合 完成一个完整的框架

- 声明式渲染(无需关心如何实现)
- 组件系统
- 客户端路由(vue-router)
- 大规模状态管理(vuex)
- 构建工具(vue-cli)

### vue的两个核心点

- 响应的数据变化
  - 当数据发生改变 -> 视图的自动更新
- 组件的视图组件
  - ui页面映射为组件树
  - 划分组件可维护、可复用、可调试

### MVC（backbone）单向

- model 数据

- view 视图

- controller 控制器

### MVVM模式 （angular,vue）双向

- M：Model 数据模型
- V：view 视图模板
- VM：view-model 视图模型

关于MVVM的例子，[点击我查看效果，代码链接在这](http://js.jirengu.com/buted/1/edit)：

```html
<div id="app">
    {{msg}}
    <!-- 表单元素 input checkbox textarea radio select -->
    <input type="text" v-model="msg">
    <!-- Object.defineProperty ES5 可以实现双向绑定的效果 -->
    <!-- 常见的指令 v-text === {{}} 防止{{}} 出现在页面上
刷新这个大括号会出现，但是开发当中经常使用{{}}  -->
    <div v-text="msg"></div>
</div>
<script src="./node_modules/vue/dist/vue.js"></script>
<script>
    let vm = new Vue({ 
        el : '#app', 
        data: { 
            msg:'hello,zfpx' 
        }

    });
</script>
```

注：

- v-model是表单元素更改后映射到 vue的“指令” directive 只是dom上的行间属性，vue给这类属性赋予一定的意义 来实现特殊的功能 所有指令都以**v-开头**，value属性会默认情况下会被vue忽略掉 selected checked 都没有意义
- v-model 会将msg的值会赋予输入框，输入框的值改变了会影响数据
- 实现双向绑定的效果：1.数据映射到视图 2.视图可以改变数据 
- v-text指令是当我们的数据渲染后，插入到对应的标签

## Vue初始化

### 安装Vue

- cdn的方式
- npm 安装 node package manager

```js
npm init // 初始化会产生package.json的文件这个文件用来描述项目的依赖，不能有大写、特殊字符、中文，而且不要和安装包的名字相同
npm init -y // 这个是直接返回结果，需要满足某些条件才可运行
npm install vue // 安装vue，如果把node_modules删除掉，然后再输入npm install 可以安装相同的依赖
```

例子，[点击我查看效果，代码链接在这](http://js.jirengu.com/hosoq/1/edit)：

```html
<div id="app">
    <!-- {{}} =>moustache 小胡子语法 表达式 可以放赋值 取值 三元 -->
    {{msg}}
</div>
<script src="./node_modules/vue/dist/vue.js"></script>
<script>
    // 引入vue后会白给你一个Vue的构造函数
    // 返回结果是vm，(el:'html')不能把vue挂载到html、body标签上，要找一个普通元素代替，不然会报错
    let vm = new Vue({ // vm == viewmodel
        el : '#app', //告诉vue能管理哪个部分,怎么选到对应标签，是通过querySelector 
        data: { // data中的数据会被vm所代理 可以直接操作数据
            msg:'hello,xyyojl' // 可以通过vm.msg 取到对应的内容或赋值
        }
    });
</script>
```

注：上面我是通过在本地引入Vue.js，如果要测试代码的话，可以将那个改成cdn引入，下同。

## defineProperty

Vue双向绑定的实现原理Object.defineproperty

下面使用Object.defineproperty来实现双向绑定，由于js.jirengu.com不支持let命令，我推测它不支持es6的语法，仅仅是推测，所以我将下面的链接代码中的let修改成var

[点击我查看效果，代码链接在这](http://js.jirengu.com/sages/1/edit?html,js,output)

```html
<input type="text" id="input">
input的值是：<span id='text'></span>

<script>
     // 声明一个对象 给对象添加属性
    let obj = {};
    let temp = {};
    Object.defineProperty(obj,'name',{
        get(){ //取obj的name属性 会触发get方法
            text.textContent = temp['name'];
            return temp['name'];   
        },
        set(val){ //给obj赋值 会触发set方法
            // obj.name = val; 这样写不行会报错
            temp['name'] = val; // 改变temp的结果
            input.value = val; // 将值赋予给输入框
            text.textContent = val;
        }
    })
    input.value = obj.name; // 页面一加载时 会调用get方法
    input.addEventListener('input',function(){ // 等待输入框的变化
        obj.name = this.value; // 当值变化的时会调用set方法
    })
</script>
```

## 基础指令

### v-model

v-model 会将msg的值会赋予输入框，输入框的值改变了会影响数据

[点击我查看效果，代码链接在这](http://js.jirengu.com/dokup/1/edit)

```html
<div id="app">
    <p>使用v-model指令</p>
    <input type="text" v-model="msg">
</div>
<script src="./node_modules/vue/dist/vue.js"></script>
<script>
    let vm = new Vue({ 
        el : '#app', 
        data: { 
            msg:'hello,zfpx', 
            p : '<p>hello</p>'
        }
    });
</script>
```

### v-text

当我们的数据渲染后，插入到对应的标签里面

[点击我查看效果，代码链接在这](http://js.jirengu.com/gulan/1/edit?html,js,output)

```html
<div id="app">
    <p>使用v-text指令</p>
    <div v-text="msg"></div>
    {{msg}}
</div>
<script src="./node_modules/vue/dist/vue.js"></script>
<script>
    let vm = new Vue({ 
      el : '#app', 
      data: { 
        msg:'hello,xyyojl', 
        p : '<p>hello</p>'
      }

    });
</script>
```

###  v-once

v-once 只绑定一次 当数据再次发生变化 也不导致页面刷新

[点击我查看效果，代码链接在这](http://js.jirengu.com/demoy/1/edit?html,js,output)

```html
<div id="app">
    <p>使用v-once指令</p>
    <input type="text" v-model="msg">
    <div>{{msg}}</div>
    <div v-once>{{msg}}</div>
</div>
<script src="./node_modules/vue/dist/vue.js"></script>
<script>
    let vm = new Vue({ 
      el : '#app', 
      data: { 
        msg:'hello,xyyojl', 
        p : '<p>hello</p>'
      }

    });
</script>
```

### v-html

把html字符当作html渲染,一定是可以信任的html

[点击我查看效果，代码链接在这](http://js.jirengu.com/kuhid/1/edit?html,js,output)

```html
<div id="app">
    <p>使用v-html指令</p>
    <div v-html='p'></div>
</div>
<script src="./node_modules/vue/dist/vue.js"></script>
<script>
    let vm = new Vue({ 
      el : '#app', 
      data: { 
        msg:'hello,xyyojl', 
        p : '<p style="color:red;">hello</p>'
      }

    });
</script>
```

## 数据响应的变化

### 处理对象

由于js.jirengu.com存在bug，不知道是哪里的问题，所以这个就没有代码链接啦

```html
<div id="app">
    {{a.school}}
</div>
<script src="./node_modules/vue/dist/vue.js"></script>
<script>
    // vue 会循环data中的数据（数据劫持）依次的增加getter和setter
    let vm = new Vue({ 
        el : '#app', 
        data: { 
            a : {school:'五口巴大学'} // 方法1
        }
        // 使用变量时 要先初始化，负责新加的属性不会导致页面刷新

    });
    // vm.$set(给谁加，加什么属性，属性值是什么); 
    // 方法2：此方法可以给对象添加响应式的数据变化
    vm.$set(vm.a,'school',1);

    // 方法3：替换原对象
    vm.a = {school:'五口巴大学',age:'333',address:'xxx'}
</script>
```
### 处理数组

```html
<div id="app">
    {{arr}}
</div>
<script src="./node_modules/vue/dist/vue.js"></script>
<script>
    // vue 会循环data中的数据（数据劫持）依次的增加getter和setter
    let vm = new Vue({ 
        el : '#app', 
        data: { 
            arr : [1,2,3,4,5]
        }

    });
    // 去改变数组中的某一项是监控不到的，也不能使用改变数组长度的方法
    // 错误：vm.arr[0] = 100;
    // 错误：vm.arr.length -= 2;

    // 数组变异方法：pop push shift unshift sort reserve splice
    vm.arr.reverse();
    vm.arr = vm.arr.map(item=>item*=3)
</script>
```


## 数组的循环v-for

- vue 提供一个指令v-for 解决循环问题的 更高效 会复用原有的结构
- 要循环谁就在谁的身上增加v-for 属性

- 默认是value of 数组 / (value,index) of 数组

[点击我查看效果，代码链接在这](http://js.jirengu.com/hatex/2/edit)

```html
<div id="app">
    <ul>
        <!-- fruit 代表数组里的每一项  注意：这个是fruit.name而不是fruits.name-->
        <!-- <li v-for="fruit of fruits">{{fruit.name}}</li> -->
        <!-- <li v-for="(fruit,index) of fruits">{{fruit.name}} {{index+1}}</li> -->
        <li v-for="(fruit,index) of fruits">
            {{index+1}}.{{fruit.name}}
            <ul>
                <li v-for="(c,childIndex) in fruit.color">{{index+1}}.{{childIndex+1}}{{c}}</li>
            </ul>
        </li>
    </ul>
	<!-- 遍历字符串 -->
    <div v-for="c in 'aaaa'">{{c}}</div>
    <!-- 遍历数字 -->
    <div v-for="c in 5">{{c}}</div>
    <!-- <div v-for="value in obj">{{value}}</div> -->
    <div v-for="(key,value,index) in obj">{{key}}:{{value}}:{{index}}</div>
</div>

<script src="./node_modules/vue/dist/vue.js"></script>
<script>
    let vm = new Vue({ 
        el : '#app', 
        data: { 
            obj:{school:'五口巴大学',age:'33',address:'xxx'},
            fruits : [
                {name:'香蕉',color:['green','yellow']},
                {name:'苹果',color:['red','green','yellow']},
                {name:'西瓜',color:['red']}]
        }
    });
</script>
```

## 事件

事件名跟JS的那些一样

[点击我查看效果，代码链接在这](http://js.jirengu.com/bihas/1/edit?html,js,output)

```html
<div id="app">
    <!-- v-on === @ -->
    <!-- 传参的话需要加括号fn()  -->
    <!-- 如果不传递参数 则不要写括号会自动传入事件源，如果写括号了要手动传入$event属性，名字不能改 -->
    <!-- <div v-on:click="fn">点我啊</div> -->
    
    <div @mousedown="fn($event,1)">点我啊</div>
</div>

<script src="./node_modules/vue/dist/vue.js"></script>
<script>
    let vm = new Vue({ // 根实例
        el : '#app', 
        data: { // data里面都是数据
            a: 1
        },
        methods:{ // methods 里面都是放方法
            /* methods 和 data 中的数据会全部放到vm上，而且名字不能冲突，
                冲突会报错，methods中的this指向的都是实例
			*/
            // fn:function(){alert(1)} es5语法
            // fn(){alert(1)} es6语法
            // 不能使用箭头函数 
            fn(event,a){console.log(event)}
        }
    });
</script>
```

## 实现简易的todo

[实现简易的todo](http://js.jirengu.com/faran/1/edit?html,js,output)

```html
<div id="app">
    <!-- @keyup.enter="add" 回车触发 
        @keyup.ctrl.enter="add" ctrl+enter 触发事件
        @keyup="add" 这两个配合使用
		// 判断是否按回车
        if(e.keyCode === 13){
            this.arr.unshift(this.val);
            this.val = '';
        }
    -->
    <!-- modifiers -->
    <input type="text" v-model="val" @keyup.ctrl.enter="add">
    <ul>
        <li v-for="(a,index) in arr">{{a}}
            <button @click="remove(index)">删除</button>
        </li>
    </ul>
</div>

<script src="./node_modules/vue/dist/vue.js"></script>
<script>
    let vm = new Vue({ // 根实例
        el : '#app', 
        methods:{ 
            add(e){
                this.arr.unshift(this.val);
                this.val = '';
            },
            remove(i){
                this.arr = this.arr.filter((item,index)=>index!==i)
            }
        },
        data: { // data里面都是数据
            val: '',
            arr: []
        }
    });

</script>
```

## 框架与库的区别

- 框架 vue （拥有完整的解决方案）**我们写好人家调用我（被动）**
- 库 jquery underscore(模板引擎) zepto animate.css 我们调用他（主动）

简单来说，比如一栋房子，房子里面有各种家具，只有进入住就可以啦，这就是框架，给你一栋房子，沙发，冰箱等等都是自己买回来的，这就是库