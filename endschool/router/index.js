const lyb = require("./src/lyb")
const admin = require("./src/admin")
const join = require("./src/join")

module.exports = (app) => {
    app.use("/lyb", lyb);
    app.use("/admin", admin);
    app.use("/join", join)
}