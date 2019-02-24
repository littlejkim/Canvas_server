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

    app.delete("/schedule/delete/:id", (req, res) => {
        const id = req.params.id;
        Schedule.findByIdAndDelete(id, function(err, schedule) {
            if (err) {
                console.log("error deleting document");
            } else {
                console.log("success deleting " + schedule);
                res.send(schedule);
            }
        });
    });

    // app.get("/schedule/:id", (req, res) => {
    //     const id = req.params.id;
    //     const schedule = Schedule.findById(id, function(err, schedule) {
    //         if (err) {
    //             console.log("error fetching schedule");
    //         } else {
    //             console.log("success fetching schedule");
    //             res.send(schedule);
    //         }
    //     });
    // });
};
