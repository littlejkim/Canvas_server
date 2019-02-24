const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const path = require("path");
const passport = require("passport");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");

require("./models/User");
require("./models/Schedule");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/scheduleRoutes")(app);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname + "/client/public/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
