const sqlite3 = require("sqlite3").verbose()
const path = require("path")
const GenId = require("./SnowFlake")

var db = new sqlite3.Database(path.join(__dirname,"../db/endserver_sql.sql"))
const genid = new GenId({WorkerId:1})

db.async = {}

db.async.all = (sql, params) => {
    return new Promise((resolve, reject) => {
        db.all(sql, params, (err, rows) => {
            resolve({ err, rows })
        })
    })
}

db.async.run = (sql, params) => {
    return new Promise((resolve, reject) => {
        db.run(sql, params, (err, rows) => {
            resolve({ err, rows })
        })
    })
}
module.exports = { db,genid } 
