//DEPENDENCY & IMPORT//
const router = require("express").Router();
const { Resume } = require("../models");
const withAuth = require("../utils/auth");

//VIEW --> POST//
router.get("/:id", withAuth, async (req, res) => {
    try {
        const resumeData = await Resume.findByPk(req.params.id);
        const resume = resumeData.get({ plain: true });
    if (resume) {
        res.render("viewResume", {
            loggedIn: req.session.loggedIn,
            loggedInUserData: req.session.loggedInUserData,
            resumeData: resume,
        });
    } else {
        res.redirect("/dashboard");
    }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;