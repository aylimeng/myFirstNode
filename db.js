/**
 * 数据库模块简单封装
 * @auth pijiaso@126.com
 */
var MongoClient = require('mongodb').MongoClient;
var log = require("log4js").getLogger("db");
var dbURL = 'mongodb://localhost:27017';

function connectDB(callback) {
    MongoClient.connect(dbURL, function (err, db) {
        if (err) {
            console.log("数据库连接失败")
        }
        callback(db);
        db.close();
    })
}

var API = {
    findOne: function (dbname, collectionname, json, callback) {
        connectDB(function (db) {
            const DB = db.db(dbname);
            const collection = DB.collection(collectionname);
            var result = collection.findOne(json,null,callback)
        })
    },
    findList: function (dbname, collectionname, json, callback) {
        connectDB(function (db) {
            const DB = db.db(dbname);
            const collection = DB.collection(collectionname);
            var result = collection.find(json).toArray(callback);
        })
    },
    insertOne: function (dbname, collectionname, json, callback) {
        connectDB(function (db) {
            const DB = db.db(dbname);
            const collection = DB.collection(collectionname);
            collection.insertOne(json, callback)
        })

    }
}

module.exports = API;