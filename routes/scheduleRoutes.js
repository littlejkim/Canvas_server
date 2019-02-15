const mongoose = require("mongoose");
const Schedule = mongoose.model("schedules");

module.exports = app => {
    app.post("/schedule/create", async (req, res) => {
        const schedule = new Schedule({
            googleId: req.body.event.userId,
            title: req.body.event.title,
            description: req.body.event.description
        }).save();
        res.send(schedule);
    });

    // app.get(`/schedules/fetchAll/${id}`, (req, res) => {});
};
