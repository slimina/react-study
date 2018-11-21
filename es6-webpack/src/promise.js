import $ from "jquery"

var http= {
    get:function (url) {
        var promise = new Promise(function (resolve,reject) {
            $.ajax({
                url:url,
                method:"get",
                success:function (data) {
                    resolve(data);
                },
                error:function (xhr,statusText) {
                    reject(statusText)
                }
            });
        });
        return promise;
    }
};

http.get("index.html").then(function (data) {
    console.log(data);
},function (err) {
    console.log(err)
});

var obj = {
    test : function ( a) {
        var promise = new Promise(function (resolve,reject) {
            if(a%2==0){
                resolve(a)
            }else{
                reject(a)
            }
        });
        return promise;
    }
};

/*
then(onFulfilled, onRejected)：这个方法实际上是把onFulfilled()函数和onRejected()函数添加到Promise对象的回调链中。
回调链就像一个由函数组构成的队列，每一组函数都是由至少一个函数构成（onFulfilled() 或者 onRejected() 或者 onFulfilled() 和 onRejected()）。
当resolve()或者reject()方法执行的时候，回调链中的回调函数会根据PromiseStatus的状态情况而被依次调用。
onFulfilled(value)和onRejected(reason)：参数value和reason的实参都是PromiseValue。这里有一点值得注意，
如果onFulfilled(value)和onRejected(reason)这两个回调函数中return返回值不是一个Promise的对象，
那么这个返回值会被赋给PromiseValue，并在下一个then()的onFulfilled(value)和onRejected(reason)中做为实参使用。
但如果这个返回值是一个Promise的对象，那么剩下的由then()构造的回调链会转交给新的Promise对象并完成调用。
*/
/*
obj.test(3).then(function (a) {
    console.log("resolve: "+ a);
    return a;
},function (a) {
    console.log("reject: "+a);
    return a;
}).then(function (a) {
    console.log("resolve: "+ a);
    return a;
},function (a) {
    console.log("reject: "+a);
    return a;
});*/

console.log("---------");

/**
 * 有这样一个问题，如果在第一个then()中执行了onRejected(reason)回调函数，并且没有return任何值的时候，
 * 那么下一个then()中将会调用onFulfilled(value)方法，而不是onRejected(reason)。因为在执行上一个
 * then()的onRejected(reason)回调函数的时候并没有出现错误或异常，所以PromiseStatus的状态就被更改为
 * fulfilled了。为了避免这个问题，我们可以在onRejected(reson)中返回一个Promise对象并reject()。
 */
obj.test(3).then(function (a) {
    console.log("resolve: "+ a);
    return a;
},function (a) {
    console.log("reject: "+a);
    return Promise.reject(a);
}).then(function (a) {
    console.log("resolve: "+ a);
    return a;
},function (a) {
    console.log("reject: "+a);
    return a;
});
//Promise.reject()方法会返回一个被reject()的Promise对象，因此使得我们可以继续走下一个then()中的onRejected(reason)方法。