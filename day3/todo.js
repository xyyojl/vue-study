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
            {isSelected:false,title:'睡觉'},
            {isSelected:false,title:'吃饭'}
        ],
        title:'',
        cur:'',
        hash:''
    },
    created(){ // ajax获取 初始化数据
        // 如果localStorage中有数据 就用有的 没数据 就用默认的
        this.todos = JSON.parse(localStorage.getItem('data')) || this.todos;
        // 监控hash的值的变化,如果页面以及有hash了 重新刷新页面也要获取hash值
        // 
        this.hash = window.location.hash.slice(2) || 'all';
        // 把hash值得变化存到data里面
        window.addEventListener('hashchange',()=>{
            // console.log(window.location.hash);
            // 当hash值变化 重新操作记录的数据
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
        add(){ // keydown/keyup 差一个单词，keydown的时候内容没有进入到输入框内
            // alert(this.title)
            this.todos.push({
                isSelected:false,
                title:this.title
            })
            this.title = '';
        },
        remove(todo){ 
            // 拿出todos中的每一项跟传过来的一项比较 item !== todo => 把不相等的留下来 
            // item !== todo => 删除相同的
            // 拿到当前点击的和数组里的对比 相等则返回false即可
            this.todos = this.todos.filter(item=>item!==todo);
        },
        remember(todo){ // 当前传递的是todo（当前点击的这一项）
            this.cur = todo;
        },
        cancel(){
            this.cur = ''
        }
    },
    computed:{
        filterTodos(){
            if(this.hash === 'all') return this.todos;
            if(this.hash === 'finish') return this.todos.filter(item=>item.isSelected);
            if(this.hash === 'unfinish') return this.todos.filter(item=>!item.isSelected);
            return this.todos;
        },
        count(){
            // 想要带false的总和，没有被选中，就留下
            return this.todos.filter(item=>!item.isSelected).length;
        }
    }
})

/* 
实现功能：
1.将数据循环到页面上,为了方便，一般我们都是会把index写上
2.敲回车时添加新数据（需要加入isSelected属性）
3.删除功能
4.计算一下当前没有被选中的个数
添加 => 删除（删除哪一个）
问题？
什么数据
 */