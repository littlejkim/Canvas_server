const passport = require("passport");
const Schedule = require("../models/Schedule");

module.exports = app => {
    app.post("/schedule/create", async (req, res) => {
        const schedule = await new Schedule({
            googleId: req.user.googleId,
            title: req.body.data.title,
            description: req.body.data.description
        }).save();
        done(null, schedule);
        res.redirect("/");
    });
};
