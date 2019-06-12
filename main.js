/**
 *入口程序
 */
var app = require('./app')
var log4js = require('log4js') ;
var fs = require("fs");
var io = io = require('socket.io');


// 日志配置
// if(!fs.existsSync("logs")) fs.mkdirSync("logs")
// log4js.configure(require('./log4js.json'))
// log = log4js.getLogger('main')
// console.log(require('./log4js.json'))

var http = require("http")
var server = http.createServer(app);
server.listen(3000);
var socket = io.listen(server);
//添加连接监听
socket.on('connection', function(client){   
    //连接成功则执行下面的监听
    client.on('message',function(event){ 
            console.log('Received message from client!',event);
    });
    //断开连接callback
    client.on('disconnect',function(){
            console.log('Server has disconnected');
    });
});