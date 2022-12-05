//DEPENDECY & IMPORT//
const router = require("express").Router();
const { Resume } = require("../../models");

//CREATE//
router.post("/", async (req, res) => {
    try {
        const dbResumeData = await Resume.create({
            contactInfo: req.body.contactInfo,
            education: req.body.education,
            workExperience: req.body.workExperience,
            skills: req.body.skills,
            summary: req.body.summary,
            user_id: req.body.user_id,
        });
    return res.status(200).json(dbResumeData);
        } catch (err) {
            console.log(err);
        return res.status(500).json(err);
    }
});

//UPDATE//
router.put("/:id", async (req, res) => {
    try {
        const updateResume = await Resume.update(req.body, {
            where: {
            id: req.params.id,
        },
    });
    return res.status(200).json(updateResume);
        } catch (err) {
            console.log(err);
    return res.status(500).json(err);
    }
});

//DELETE//
router.delete("/:id", async (req, res) => {
    console.log(req.params.id);
    try {
        const deleteResumeData = await Resume.destroy({
            where: {
            id: req.params.id,
        },
    });
    return res.status(200).json(deleteResumeData);
        } catch (err) {
            console.log(err);
    return res.status(500).json(err);
    }
});

module.exports = router;