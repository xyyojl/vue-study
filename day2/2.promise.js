// resolve 代表的是转向成功态
// reject 代表的是转向失败态 resolve和reject均是函数
// promise的实例就一个then方法，then方法中有两个参数

// 成功与失败都是自己来决定的

let p = new Promise((resolve,reject)=>{
    setTimeout(function(){
        let a = '蘑菇';
        resolve(a);
        // reject();
    },2000)
})
p.then((data)=>{console.log(data);},(err)=>{console.log('err');})


/* let p = new Promise(()=>{
    console.log(1);
    
})
console.log(2); */
