function ajax({url='',type='get',dataType='json'}) {
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open(type,url,true);
        xhr.responseType = dataType;
        xhr.onload = function(){ // xhr.readyState =4 xhr.status = 200
            if(xhr.status === 200){
                resolve(xhr.response); // 成功调用成功的方法
            }else{
                reject(err); // 失败调用失败的方法
            }
            
        };
        xhr.error = function(err){
            reject(err); // 失败调用失败的方法
        }
        xhr.send();
    })
}

// ajax({url:'./carts.json'}).then()


/* let xhr = new XMLHttpRequest();
    xhr.open(type,url,true);
    xhr.responseType = dataType;
    xhr.onload = function(){ // xhr.readyState =4 xhr.status = 200

    };
    xhr.send(); */

/* ajax({}).then(()=>{

},()=>{

}) */



/* $.ajax({
    url:'',
    data:{},
    type:'get',
    dataType:'json',
    success
}) */