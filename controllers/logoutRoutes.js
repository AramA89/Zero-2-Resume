const router = require("express").Router();

//RENDER HANDLEBARS --> HTML//
    router.get("/", async (req, res) => {
        res.render("logout", {
            loggedIn: false,
            loggedInUserData: req.session.loggedInUserData,
        });
    });

    module.exports = router;