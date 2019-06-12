/**
 * 控制层
 */
var log = require("log4js").getLogger("index")
var DB = require('../db')
module.exports = {
    index(req, res, next) {
        DB.findList('userlist', 'userlist', {}, function (error, docs) {
            res.send(docs);
            res.end();
        })
    },
    name(req, res, next) {
        var _uid = req.query.uid;
        console.debug(_uid)
        DB.findList('userlist', 'userlist', {uid:_uid}, function (error, docs) {
            res.send(docs);
            res.end();
        })
    }
}