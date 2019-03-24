// 做饭 -> 买菜

// 异步，要想到回调函数
// 手动传callback
let a = '';
function buy(callback){
    setTimeout(()=>{
        a = '蘑菇';
        callback(a);
    },2000)
    
}
buy(function cookie(val){
    // cookie里面拿到蘑菇
    console.log(val);
});  // 回调函数 将后续的处理逻辑传入到当前要做的事，事情做好后调用此函数


/* function cookie(){
    // cookie里面拿到蘑菇
    console.log(a);
}
cookie(); */

// Promise 解决回调函数的promise三个状态 
// 成功态 失败态 等待
