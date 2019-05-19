let str = require('./a.js')
import xxx from './b.js'
console.log(str);
console.log(xxx);

let a = b => c => d => b+c+d
let obj = {school:'zfpx'};
let obj1 = {age:8};

let newObj = {...obj,...obj1}; // es7语法
console.log(newObj)