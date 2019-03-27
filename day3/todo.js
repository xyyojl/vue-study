let vm = new Vue({
    el:'#app',
    data:{
        todos:[
            {isSelected:false,title:'睡觉'},
            {isSelected:false,title:'吃饭'}
        ],
        title:'',
        cur:''
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
            // 拿出todos中的每一项跟传过来的一项比较 item == todo => 把相等的留下来 
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
        count(){
            // 想要带false的总和，没有被选中，就留下
            return this.todos.filter(item=>!item.isSelected).length;
        }
    }
})

/* 
1.将数据循环到页面上,为了方便，一般我们都是会把index写上
2.敲回车时添加新数据（需要加入isSelected属性）
3.删除功能
4.计算一下当前没有被选中的个数
添加 => 删除（删除哪一个）
 */