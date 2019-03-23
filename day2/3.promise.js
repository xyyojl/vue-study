function buyPack() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(Math.random()>0.5){
                resolve('买');
            }else{
                reject('不买')
            }
        },Math.random()*1000*10);
        
    })
}
buyPack().then(function (data) {
    // 买
    console.log(data);
},function(data){
    // 不买
    console.log(data);
})

/* 
// 会报错，原因是没有返回promise实例
function buyPack() {
    
}
buyPack().then(function (data) {
    // 买
    console.log(data);
},function(data){
    // 不买
    console.log(data);
}) */