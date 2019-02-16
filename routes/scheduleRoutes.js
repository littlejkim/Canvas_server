const mongoose = require("mongoose");
const Schedule = mongoose.model("schedules");

module.exports = app => {
    app.post("/schedule/create", async (req, res) => {
        const schedule = new Schedule({
            googleId: req.body.event.userId,
            title: req.body.event.title,
            description: req.body.event.description
        }).save(function(err, schedule) {
            if (err) {
                console.log("Error saving schedule", err);
            } else {
                console.log("sending json to client", schedule);
                res.json(schedule);
            }
        });
    });

    app.get("/schedule/fetchAll", (req, res) => {
        const schedules = Schedule.find(
            {
                googleId: req.user.googleId
            },
            function(err, schedules) {
                if (err) {
                    console.log(err);
                } else {
                    res.send(schedules);
                }
            }
        ).sort({ date: "descending" });
    });
};
