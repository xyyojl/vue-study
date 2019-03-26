### vue第二天

- v-model（如果checkbox,select多选是数组，提供一个**value属性**）（radio checkbox 分组靠的是v-model），checked selected 不存在

- 修饰符 .number .lazy

- 按键修饰符  .enter .ctrl .keyCode

- 事件

  - @事件.stop

  - ```javascript
    stopPropagation 
    cancelBubble=true 
    ```

  - @事件.capture 

  - ```javascript
    xxx.addEventListener('click',fn)
    ```

  - @事件.prevent

  - ```javascript
    preventDefault 
    returnValue=false
    ```

  - @事件.once

  - ```javascript
    on('click') off('click')
    ```

  - @事件.self

  - ```javascript
    e.srcElement&&e.target 判断事件源绑定事件
    ```

### filters实例上可以用

```javascript
{{'123' | my(1,2,3)}}
filters:{
    my(data,parm1,parm2,parm3){
        
    }
}
// {{123 | toFixed(2)}}
```

### computed 计算“属性” 不是方法

- **方法不会有缓存**，computed会根据依赖（归vue管理的数据，可以响应式变化的）的属性进行缓存
- 两部分组成有get和set（不能只写set）一般情况下通过JS赋值影响其他人或者表单元素设置值的时候会调用set方法

### v-if/v-show

- v-if 操作的是dom v-if可以和v-else-if,v-else连写
- v-show操作的是样式

### v-bind简写:

- 动态绑定“属性”

```
  <img :src="src" :width="w">
```

- 


如何实现购物车思路：

1. 造假数据