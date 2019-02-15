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

    app.get("/schedule/fetchAll", (req, res) => {
        const schedules = Schedule.find(
            {
                // googldId: `${req.user.googleId}`
                googleId: req.user.googleId
            },
            function(err, schedules) {
                if (err) {
                    console.log(err);
                } else {
                    res.send(schedules);
                }
            }
        );
    });
};
