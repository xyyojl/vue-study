export let str = "我很帅";
export let str2 = "我很英俊！";
// 使用export 会将str和str2放到一个对象内导出 {str:'我很帅',str2:'我很英俊'}
// 导出函数
/* export function a(){
    alert(1)
} */
export let a = () =>{alert(2)}

// babel 模块 翻译官