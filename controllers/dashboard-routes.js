//DEPENDENCY & IMPORT//
const router = require("express").Router();
const { Resume, User } = require("../models");
const withAuth = require('../utils/auth');

router.get("/", withAuth, async (req, res) => {
    try {
        const resumeData = await Resume.findAll({
            include: [
            {
                model: User,
                attributes: ["id", "username"],
            },
        ],
        order: [["createdAt", "DESC"]],
    });

        const resumes = resumeData.map((resume) => resume.get({ plain: true }));
            res.render("dashboard", {
                loggedIn: req.session.loggedIn,
                loggedInUserData: req.session.loggedInUserData,
                resumes: resumes,
        });
        } catch (err) {
            res.status(500).json(err);
        }
});

module.exports = router;