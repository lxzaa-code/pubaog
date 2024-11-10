const express = require("express");
const { db, genid } = require("../../utils/onDb");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

router.post("/add", async (req, res) => {
    let { content, age, phone } = req.body;
    const sql = "INSERT INTO `join` (id, content, age, phone) VALUES (?,?, ?, ?)";

        const { err, rows } = await db.async.run(sql, [genid.NextId(),content, age, phone]);
            res.send({
                code: 200,
                msg: "成功添加"
            });
});


router.get("/list", async (req, res) => {
    const search_sql = "SELECT * FROM `join`"

    let { err, rows } = await db.async.all(search_sql, [])

    if (err == null) {
        res.send({
            code: 200,
            msg: "查询成功",
            rows
        })
    } else {
        res.send({
            code: 500,
            msg: "查询失败"
        })
    }

})

router.delete("/delete", async (req, res) => {

    let id = req.body
    const delete_sql = "DELETE FROM `join` WHERE `id` = ?"
    let { err, rows } = await db.async.run(delete_sql, [id])

    if (err == null) {
        res.send({
            code: 200,
            msg: "删除成功"
        })
    } else {
        res.send({
            code: 500,
            msg: "删除失败"
        })
    }

})

module.exports = router;