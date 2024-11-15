const express= require("express");
// const multer = require("multer");
const app = express()
const routes = require("./router/index")
//
const port = 8040;
app.use(function (req, res, next) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", "*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers", "*");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    if (req.method == "OPTIONS") res.sendStatus(200); //让options尝试请求快速结束
    else next();
});

app.use(express.json())
/**
 const update = multer({
    dest: "./public/update/temp"
})

app.use(update.any())

 */


routes(app)
app.get("/", (req, res) => {
    res.send("O.O")
})


app.listen(port, () => {
    console.log(`server Listening at ${port}`);
})