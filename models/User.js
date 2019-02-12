const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    displayName: String,
    lastName: String,
    firstName: String,
    email: String,
    photo: String
});

mongoose.model("users", userSchema);
