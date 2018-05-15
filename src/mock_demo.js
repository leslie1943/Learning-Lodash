var Mock = require('mockjs');

var Random = Mock.Random;
var data = Mock.mock({
    'name1|+1':4,   //生成4，如果循环每次加1
    'name2|1-7':2,  //生成一个数字，1到7之间
    'name3|1-4.5-8':1,   //生成一个小数，整数部分1到4，小数部分5到8位
    'date1': Random.date(),
    'em1': Random.email(),
    'em3': Mock.mock({
        email:'@email'
    }),
    'natural1':Random.natural(1,100),
    "color":Random.color(), //格式'#rrggbb'
    "hex":Random.hex(),   //好像和color没什么不同
    "rgb":Random.rgb(),   //生成格式如rgb(133,233,244)
    "rgba":Random.rgba(), //生成个事如rgba(111,222,233,0.5)
    "hsl":Random.hsl(),  //生成格式(345,82,71),
    'url1': Random.url(),
    'url2':Random.url('http'),
    'url3':Random.url('http','58.com'),
    'tld':Random.tld(),
    'guid': Random.guid(),
    'id':Random.id(),
    'image1':Random.image('66x31','#ddd','#123456','四个参数的时候第三个参数是前景色'),
    'image2':Random.image('240x400','white','#1483dc','.gif','全部参数的情况下'),
    'name9':'@FIRST',




});
console.info(data);