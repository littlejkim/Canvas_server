const mongoose = require("mongoose");
const { Schema } = mongoose;

const scheduleSchema = new Schema(
    {
        googleId: String,
        title: String,
        description: String,
        date: { type: Date, default: Date.now }
    },
    { collection: "schedules" }
);

mongoose.model("schedules", scheduleSchema);
