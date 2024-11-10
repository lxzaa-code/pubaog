const express = require("express");
const { db, genid } = require("../../utils/onDb");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

router.post("/add", async (req, res) => {
    let { newmessage, newclass, newname, timestamp } = req.body;
    const sql = "INSERT INTO lyb (id, account, class, content, timestamp) VALUES (?, ?, ?, ?, ?)";
    try {
        const result = await db.async.all(sql, [genid.NextId(), newname, newclass, newmessage, timestamp]);
        res.send({
            code: 200,
            msg: "成功添加"
        });
    } catch (err) {
        res.send({
            code: 500,
            msg: "添加失败"
        });
    }
});


router.get("/list", async (req, res) => {
    const sql = "SELECT * FROM lyb";
    try {
        const result = await db.async.all(sql);
        res.send({
            code: 200,
            result,
            msg: "获取列表成功"
        });
    } catch (err) {
        res.send({
            code: 500,
            msg: "获取列表失败",
        });
    }
});
module.exports = router;