const passport = require("passport");

module.exports = app => {
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
            console.log("Google callback successful. Redirecting to dashboard");
            res.redirect("/dashboard");
        }
    );

    app.get("/api/logout", (req, res) => {
        console.log("Logging out, redirecting user to /");
        req.logout();
        res.redirect("/");
    });

    app.get("/api/current_user", (req, res) => {
        res.send(req.user);
    });
};
