
//为了进一步操作资源，我们经常使用这些JS方法（推荐），例如 .map()， .filter()和 .reduce()。
/*
基于fetch的基本模块
fetch
.then(response.something) //定义返回的类型和数据格式
.then(data) // 返回的数据
* */

fetch("https://jsonplaceholder.typicode.com/users/1")
.then(response=>response.json())
    .then(data=>console.log(data))
    .catch(error=>console.log(error));

fetch("https://jsonplaceholder.typicode.com/users",{
    method:"POST",
    body:JSON.stringify({
        username:"tom",
        email:"tom@123.com",
        userId:101010101,
    }),
    headers:{
        'Content-Type':'application/json;charset=utf-8'
    }
}).then(response=>response.json())
.then(data=>console.log(data));