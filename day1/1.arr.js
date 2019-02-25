// 配置npm 和语法
// file -> settings中的配置 --> 搜索npm
// file -> settings中的配置 reactJSX
// webstorm 最新版本可能会有问题，所以可以使用上一个版本
// console.log('ok');

// 跟forEach 等价的是 for循环
// forEach 不能看出它是怎样运行的，但是for循环 可以
let arr = [1,2,3,4,5];
arr.b = '100';
for (let i = 0; i < arr.length; i++) { // 编程式
    console.log(arr[i]);
}
/* 先声明一个变量，然后判断是否满足条件，然后在执行语句，
然后再i++，然后再判断是否满足条件，循环下去，当条件不满足的时候，就会跳出循环 */
// 回调函数 参数基本都有两个 
// 面试：forEach, for in, for,for of 的区别
// 1. forEach 不支持 return 
arr.forEach(function(item){ 
    // 声明式（不关心如何实现）不需要知道原理
    console.log(item);
});

for (let key in arr) { 
    // 使用for in 时, key会变成字符串类型,包括数组的私有属性
    console.log(typeof key);
    console.log(key);
}
/**
 比如加上 arr.b = '100'
    for循环
 */
// 既能return，又不可以遍历私有属性 的方法，解决forEach和for in存在的问题
console.log('for of')
for (let val of arr) {
    // 支持return 并且是值of数组（不能遍历对象）
    console.log(val);
}

/* 报错：obj is not iterable obj不可遍历
let obj = {school:'zfpx',age:8};
for (let val of obj) {
    // 支持return 并且是值of数组（不能遍历对象）
    console.log(val);
} */
let obj = {school:'zfpx',age:8};
// 但是可以使用Object.keys() 将数组的key作为新的数组
// ['school','age']

for (let val of Object.keys(obj)) {
    // 支持return 并且是值of数组（不能遍历对象）
    console.log(val);
    // console.log(obj.val); // 这种写法不行会把val当成字符串
    console.log(obj[val]);
} 

// 2. filter 是否操作原数组：不   整个函数返回结果：过滤后的记录  
// 回调函数的返回结果：返回true 表示这一项放到新数组中 (删除)

// 2 < item < 5 为什么不可以，因为 2 < item 返回的boolean,最大为1，永远都是true，完了
// 1 === 1 === 1 false
let newArray = [1,2,3,4,5].filter(function(item){
    return item > 2 && item < 5;
})
console.log(newArray)

// 写代码的时候filter map 使用比较多
// 3. map 映射 将原有的数组映射成一个新的数组 [1,2,3]
// <li>1</li>2<li></li><li>3</li>
// 不操作原数组 返回新数组 回调函数中返回什么这一项就是什么 (更新)
let arr1 = [1,2,3].map(function(item){
    return `<li>${item}</li>`; // ``是es6中的模版字符串 遇到变量用${}取值
});
console.log(arr1.join(''));

// 4.includes 返回的是boolean
var arr3 = [1,2,3,4,55,555];
console.log(arr3.includes(5)); 
// 只要有5(带有5) 就拿(找)出来

// 5. 返回找到的那一项,不会改变数组 回调函数中返回true 表示找到啦,找到后停止循环,找不到返回的是undefined
let result = arr3.find(function(item,index){ // 找到具体的某一项 用find 
    // 使用正则或其他方法
    return item.toString().indexOf(5) > -1;
})
console.log(result);

// 6. some 找true 找到 true 后停止 返回 true 找不到返回 false
// 7. every 找false 找到false 后停止 返回false

// 8. reduce 这个方法比较常见 收敛 4个参数 
// 返回的是叠加后的结果 原数组不发生变化 回调函数返回的结果:
// 想求数组的和
// prev 代表的是数组的第一项,next 代表的是数组的第二项 
// 第二次 prev 是undefined(没有写return),next 是数组的第三项
let sum = [1,2,3,4,5].reduce(function(prev,next,index,item){
    // 数组第一个是前一个 数组第二个是后一个 
    // console.log(arguments);
    console.log(prev,next);
    return prev + next; // 本次的返回值 会作为下一次的prev
});
console.log(sum);

// demo [{price:30,count:2},{price:30,count:3},{price:30,count:4}] 求count的和
let sum2 = [{price:30,count:2},{price:30,count:3},{price:30,count:4}].reduce(function(prev,next){
    // console.log(prev,next);
    // return prev.price*prev.count+next.price*next.count;  错误写法 第一次的返回值为 150 下一项是对象
    // 0 + 60
    // 60 + 90
    // 150 + 120
    return prev + next.price*next.count;

},0); // 默认指定第一次的prev
console.log(sum2);

// 数组扁平化
// 二维数组 --> 一维数组 [[1,2,3],[4,5,6],[7,8,9]]
// console.log([[1,2,3],[4,5,6],[7,8,9]].join(',')); 结果为字符串

let flat = [[1,2,3],[4,5,6],[7,8,9]].reduce(function(prev,next){
    return prev.concat(next);
});
console.log(flat);