/* 
实现思路：
1.自己弄一些数据，将数据循环到页面上,为了方便，一般我们都是会把index写上
2.敲回车时添加新数据（需要加入isSelected属性）
3.删除功能
4.计算一下当前没有被选中的个数 
实现功能:
1.显示未完成的任务个数 使用计算属性 computed
2.添加任务 √ 添加title属性，绑定add方法
3.完成任务 √ 动态添加class
4.修改任务 添加cur属性，绑定remember,cancel方法，和回车事件，失去焦点
5.删除任务 √ 绑定remove方法
6.切换条件，显示不一样的内容
7.将数据保存到localstorage
出现问题，
1.没有自动聚焦，目标实现自动获取焦点
2.如何实现切换
*/

let vm = new Vue({
    el:'#app',
    directives:{
        focus(el,bindings){
            // 当点击当前li时让内部的输入框获取焦点
            if(bindings.value){
                el.focus();  // 获取焦点
            }
        }
    },
    data:{
        todos:[
            {isSelected:false,title:'吃饭'},
            {isSelected:true,title:'睡觉'},
            {isSelected:false,title:'购物'},
        ],
        title:'',
        cur:'',
        hash:''
    },
    created(){
        // 获取localStorage中的数据 没有则使用默认的
        this.todos = JSON.parse(localStorage.getItem('data')) || this.todos;

        // 监控hash的值的变化,如果页面以及有hash了 重新刷新页面也要获取hash值
        console.log(window.location.hash);
        this.hash = window.location.hash.slice(2) || 'all';
        // 当hash值变化时，重新操作记录的数据
        window.addEventListener('hashchange',()=>{
            this.hash = window.location.hash.slice(2);
        },false)
    },
    watch:{
        todos:{ // watch 默认只监控一层的数据变化，深度监控
            handler(){// 默认 写成函数 就相当于默认写了个handler
                // localStorage 默认存的是字符串
                localStorage.setItem('data',JSON.stringify(this.todos))
            },deep:true
        }
    },
    methods:{
        add(){
            if(!this.title) return;
            this.todos.unshift({
                isSelected:false,
                title:this.title
            })
            this.title=''
        },
        remove(todo){
            // 拿出todos中的每一项跟传过来的那一项比较 相同则删除 不同则保留
            // 记得重新赋值给this.todos
            this.todos = this.todos.filter(item=>item!==todo);
        },
        remember(todo){
            this.cur = todo;
        },
        cancel(){
            this.cur = ''
        }
    },
    computed:{
        count(){
            return this.todos.filter(item=>!item.isSelected).length
            // return this.todos.filter(item=>!item.isSelected).length;
        },
        filterTodos(){
            if(this.hash === 'all') return this.todos;
            if(this.hash === 'finish') return this.todos.filter(item=>item.isSelected);
            if(this.hash === 'unfinish') return this.todos.filter(item=>!item.isSelected);
            return this.todos;
        }
    }
})