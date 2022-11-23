const router = require('express').Router();
const { Resume, User } = require('../models');

router.get('/', async (req, res) => {
    try {
        const resumeData = await Resume.findAll({
            include: [{ 
                model: User,
                attributes: ['id'],
            },
        ],
        order: [['createdAt', 'DESC']],
        });
        const resume = resumeData.map((resume) => resume.get({ plain: true }));
            res.render('addresume', {
                loggedIn: req.session.loggedIn,
                loggedInUserData: req.session.loggedInUserData,
                resume: resume,
            });
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;