console.info("-------------------------------------------------------------");
console.info("-------------------------------------------------------------");
console.info("-------------------------------------------------------------");
console.info("-------------------------------------------------------------");
console.info("-------------------------------------------------------------");
console.info("-------------------------------------------------------------");
var lodash = require('lodash');

console.info('[lodash...] - forEach');
var arr = ['a', 'b', 'c'];
lodash.forEach(arr, function (x) {
    console.log(x);
})

var arr = [1,2,3];
var res=[];
lodash.forEach(arr, function (x) {
     res.push(x+1);
})
console.log("forEach res:" + res.join(' '));

var arr = [1,2,3];
var resMap=[];
arr.map(item=>{
    resMap.push(item+1)
})
console.log("map resMap:" + resMap.join(' '));

console.info('lodash...] - filter-纯数组. 等于 ');
var arr = ['a', 'b', 'c'];
var filter_rs = lodash.filter(arr, el => {
    return el === 'a'; // [ 'a' ]
})
console.info(filter_rs);

console.info('lodash...] -纯数组. 不等于 ');
var arr = ['a', 'b', 'c'];
var filter_rs = lodash.filter(arr, el => {
    return el !== 'a'; // [ 'b', 'c' ]
});
console.info(filter_rs);


console.info('lodash...] - 数组对象 等于');
var arr = [{ name: 'hello' }, { name: 'leslie' }, { name: 'world' }];
var filter_rs = lodash.filter(arr, el => {
    return el.name === 'leslie';
})
console.info(filter_rs); //[ { name: 'leslie' } ]

console.info('lodash...] - 数组对象 不等于');
var arr = [{ name: 'hello' }, { name: 'leslie' }, { name: 'world' }];
var filter_rs = lodash.filter(arr, el => {
    return el.name !== 'leslie';
})
console.info(filter_rs); //[ { name: 'hello' }, { name: 'world' } ]

console.info('lodash...] - sortByString to Array');
console.info(lodash.sortBy('yxssszwdaww')); // [ 'a', 'd', 's', 's', 's', 'w', 'w', 'w', 'x', 'y', 'z' ]


console.info('lodash...] - uniq');
var arr = [8, 2, 2, 1, 2, 3, 4, 3, 4, 5, 6, 8, 1, 7, 6, 7];
console.info(lodash.uniq(arr)); // [ 8, 2, 1, 3, 4, 5, 6, 7 ]

console.info('lodash...] - sortedUniq');
var arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6, 7];
console.info(lodash.sortedUniq(arr)); // [ 1, 2, 3, 4, 5, 6, 7 ]
console.info(lodash.sortedUniq(arr).reverse());


console.info('lodash...] - uniqWith + isEqual' + '=> return non-duplicated array');
var objects = [{ x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 1, y: 2 },];
console.info(lodash.uniqWith(objects, lodash.isEqual)); // [ { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 } ]


console.info('lodash...] - orderBy');
var users = [
    { 'user': 'fred', 'age': 48 },
    { 'user': 'barney', 'age': 34 },
    { 'user': 'fred', 'age': 40 },
    { 'user': 'barney', 'age': 36 }
]
console.info(lodash.orderBy(users, ['user', 'age'], ['asc', 'desc']))
/**
 [ 
    { user: 'barney', age: 36 },
    { user: 'barney', age: 34 },
    { user: 'fred', age: 48 },
    { user: 'fred', age: 40 } 
]
 */

console.info('lodash...] - map');
var users = ['leslie', 'lisa'];
var nums = [6, 4];
var arr = lodash.map(users, el => el.length) // [6 ,4]
var arr = lodash.map(nums, el => el * el) // [36 ,16]
console.info(arr);

// Array find.
var resAry = [{id:1,val:11},{id:2,val:22}];
var res = resAry.find((item)=>{
return item.id === 2;
}).val;
res;

let a = [1,2,3];
let b = [0,...a,4];
console.info(b);

let obj = { a: 1, b: 2 }; 
let obj2 = {...obj, c:3,d:4}
console.info(obj2);

let sysData = [
    {id: '总报价',params: ``}, 
    // 笔记本电脑
    {id: '笔记本电脑',params: `品牌、规格型号:苹果air联想Lenove G470戴尔 D10`}, 
    {id: '笔记本电脑',params: `技术参数及设置要求:1T硬盘8M内存s`}, 
    {id: '笔记本电脑',params: `售后服务要求:三年保修7*24小时电话支持`},
    {id: '笔记本电脑',params: '实名证件-身份证'}, 
    {id: '笔记本电脑',params: '厂商证件 - 医疗器械生产许可证'},
    {id: '笔记本电脑',params: '代理商证件-医疗器械产品注册证'},
    {id: '笔记本电脑',params: '供应商报价'}, 
    {id: '笔记本电脑',params: '报价备注'},
    //鼠标
    {id: '鼠标',params: `品牌、规格型号:苹果air联想Lenove G470戴尔 D10`}, 
    {id: '鼠标',params: `技术参数及设置要求:1T硬盘8M内存s`}, 
    {id: '鼠标',params: `售后服务要求:三年保修7*24小时电话支持` },
    {id: '鼠标',params: '实名证件-身份证'}, 
    {id: '鼠标',params: '厂商证件 - 医疗器械生产许可证'},
    // {id: '鼠标',params: '代理商证件-医疗器械产品注册证' },
    {id: '鼠标',params: '供应商报价'}, 
    {id: '鼠标',params: '报价备注'},
    //证件
    {id:"供应商证件",params:"实名证件-营业执照"},
    {id:"供应商证件",params:"厂商证件-生产许可证"},
    {id:"供应商证件",params:"代理商证件-资格证"},
    {id:"供应商证件",params:"产品-税务登记证"},
];
let index = lodash.findIndex(sysData, {id:"笔记本电脑"});
let groupMap = lodash.countBy(sysData, "笔记本电脑");
console.info("index:" + index);
console.info("groupMap:" + groupMap);