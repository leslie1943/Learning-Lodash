/**
 * ES6- async函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await，仅此而已
 * 
 * async函数对 Generator 函数的改进，体现在以下四点：
 *      1: 内置执行器。Generator 函数的执行必须靠执行器，所以才有了co模块，而async函数自带执行器。也就是说，async函数的执行，与普通函数一模一样，只要一行
 *      2: 更好的语义.async和await，比起星号和yield，语义更清楚了。async表示函数里有异步操作，await表示紧跟在后面的表达式需要等待结果
 *      3: 更广的适用性。co模块约定，yield命令后面只能是 Thunk 函数或 Promise 对象，而async函数的await命令后面，可以是 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时等同于同步操作）
 *      4: 返回值是 Promise。async函数的返回值是 Promise 对象，这比 Generator 函数的返回值是 Iterator 对象方便多了。你可以用then方法指定下一步的操作。

 */
/**
 * async函数返回一个 Promise 对象，可以使用then方法添加回调函数。
 * 当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句
 */

// ################################################# demo #################################################
function getStockSymbol(name){
    return '$';
}
function getStockPrice(name){
    return '$' + '1000';
}
async function getStockPriceByName(name){
    const symbol = await getStockSymbol(name);
    const stokcPrice = await getStockPrice(symbol);
    return stokcPrice;
}
getStockPriceByName('goog').then(function(res){
    console.info(res);
})

// ################################################# demo #################################################
function timeout(ms){
    return new Promise((resolve)=>{
        setTimeout(resolve,ms);
    });
}

async function asyncPrint(value, ms){
    await timeout(ms);
    console.info('------------------- 1st demo ------------------- ')
    console.info(value);
}

asyncPrint('Hello world 1！',2000);

// ################################################# demo #################################################
/**
 * 由于async函数返回的是 Promise 对象，可以作为await命令的参数。所以，上面的例子也可以写成下面的形式
 */
async function timeoutAsync(ms){
    await new Promise((resolve)=>{
        setTimeout(resolve,ms);
    });
}
async function async2Print(value, ms){
    await timeoutAsync(ms);
    console.info('------------------- 2nd demo ------------------- ')
    console.info(value);
}
async2Print('Hello world 2！',3000);