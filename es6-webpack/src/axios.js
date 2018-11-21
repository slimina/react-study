
//Axios是一个用于发出HTTP请求的开源库，并提供许多强大的功能。

// npm install axios --save

import axios from "axios"
axios({
    method:'post',
    url:"https://jsonplaceholder.typicode.com/users",
    data:JSON.stringify({
        username:"tom",
        email:"tom@123.com",
        userId:101010101,
    })
}).then(data=>console.log(data.data))
.catch(err=>console.log(err))


function getUser() {
    const userUrl= "https://jsonplaceholder.typicode.com/users/1"
    return axios.get(userUrl)
}

function getPost() {
    const postUrl = "https://jsonplaceholder.typicode.com/users"
    return axios.get(postUrl)
}

axios.all([getUser(),getPost()])
.then((users,posts)=>{
    console.log(users)
    console.log(posts)
}).catch(err=>console.log(err))