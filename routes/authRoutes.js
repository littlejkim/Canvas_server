const passport = require("passport");

module.exports = app => {
    // The "catchall" handler: for any request that doesn't
    // match one above, send back React's index.html file.
    // app.get("*", (req, res) => {
    //     res.sendFile(path.join(__dirname + "/client/build/index.html"));
    // });

    app.get(
        "/auth/google",
        passport.authenticate("google", {
            scope: ["profile", "email"]
        })
    );

    app.get(
        "/auth/google/callback",
        passport.authenticate("google"),
        (req, res) => {
            res.redirect("/dashboard");
        }
    );

    app.get("/api/logout", (req, res) => {
        req.logout();
        res.redirect("/");
    });

    app.get("/api/current_user", (req, res) => {
        res.send(req.user);
    });
};
