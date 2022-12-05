//DEPENDECY & IMPORT//
const router = require("express").Router();
const { Resume } = require("../../models");

//CREATE//
router.post("/", async (req, res) => {
    try {
        const dbResumeData = await Resume.create({
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            github: req.body.github,
            school: req.body.school,
            degree: req.body.degree,
            employer: req.body.employer,
            dates_worked: req.body.dates_worked,
            skill_1: req.body.skill_1,
            skill_2: req.body.skill_2,
            skill_3: req.body.skill_3,
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