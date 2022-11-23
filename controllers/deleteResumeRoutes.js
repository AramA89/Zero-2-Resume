const router = require('express').Router();
const { Resume } = require('../models');
const withAuth = require('../utils/auth');

router.delete('/:id', withAuth, (req, res) => {
    Resume.destroy({
        where: {
            id: req.params.id 
        }
    }).then(resumeData => {
        if (!resumeData) {
            res.status(404).json({ message: 'No resume found with this id' });
            return;
        }
        res.json(resumeData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;