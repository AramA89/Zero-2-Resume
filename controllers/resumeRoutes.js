//DEPENDENCY & IMPORT//
const router = require("express").Router();
const Resume = require("../models/Resume");
const User = require("../models/User");

//RENDER HANDLEBARS --> LOAD HTML POST --> TRIMMED SUMMARY VIA UTIL HELPER//
router.get("/:id", async (req, res) => {
    try {
        const resumeData = await Resume.findOne({
            where: {
            id: req.params.id,
            },
         
                include: [
                    {
                        model: User,
                        attributes: ["id", "username"],
                    },
                ],
    });
        const resume = resumeData.get({ plain: true });
        if (resume) {
            res.render("resume", {
                loggedIn: req.session.loggedIn,
                loggedInUserData: req.session.loggedInUserData,
                resumeData: resume,
            });
        } else {
            res.redirect("/");
        }
        } catch (err) {
            res.status(500).json(err);
    }
});

module.exports = router;