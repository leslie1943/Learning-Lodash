/**
 * Generator 函数是 ES6 提供的一种异步编程解决方案,语法行为与传统函数完全不同.
 * 语法上,首先可以把它理解成,Generator 函数是一个状态机,封装了多个内部状态.
 * 执行 Generator 函数会返回一个遍历器对象,
 * 也就是说,Generator 函数除了状态机,还是一个遍历器对象生成函数.返回的遍历器对象,可以依次遍历 Generator 函数内部的每一个状态
 * 
 * 形式上,Generator函数是一个普通函数,但是有2个特征:
 *  1:function 关键字与函数名之间有一个星号(*)
 *  2:函数体内部使用 yield 表达式,定义不同的内部状态.
 */
function* hwGenerator(){
    yield 'hello';
    yield 'world';
    return 'ending'
}

let hw = hwGenerator();
console.info(hw.next());
console.info(hw.next());
console.info(hw.next());

/**
 * yield表达式:
 * Generator 函数返回的遍历器对象，只有调用next方法才会遍历下一个内部状态，所以其实提供了一种可以暂停执行的函数。yield表达式就是暂停标志。
 * 遍历器对象的next方法的运行逻辑:
 *  1: 遇到yield表达式，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值
 */

 function* test(){
     console.info('do next.');
 }

/**
 * 函数f如果是普通函数，在为变量generator赋值时就会执行。但是，函数f是一个 Generator 函数，就变成只有调用next方法时，函数f才会执行
 */
let generator = test();

setTimeout(()=>{
    generator.next();
},2000);

