//DEPENDENCY & IMPORT//
const router = require("express").Router();
const { Resume } = require("../models");

//EDIT --> POST//
router.get("/:id", async (req, res) => {
    try {
        const resumeData = await Resume.findByPk(req.params.id);
        const resume = resumeData.get({ plain: true });
    if (post) {
        res.render("useredit", {
            loggedIn: req.session.loggedIn,
            loggedInUserData: req.session.loggedInUserData,
            resumeData: resume,
        });
    } else {
        res.redirect("/addresume");
    }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;