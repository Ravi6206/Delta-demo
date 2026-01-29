const express  = require("express");
const router = express.Router();
const user = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js");
const userControllers = require("../controllers/users.js");

// Signup Route
router.route("/signup")
.get(userControllers.renderSignupForm)
.post(wrapAsync(userControllers.signup));

router.route("/login")
// Login Route
.get(userControllers.renderLoginForm)
// Login Post Route
.post(saveRedirectUrl, passport.authenticate("local", {
        failureRedirect : "/login",
        failureFlash : true,
    }),
    userControllers.login);

    // Logout Route
    router.get("/logout", userControllers.logout);


module.exports = router;