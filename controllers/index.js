const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
// const saveRoutes = require('./saveRoutes');
const editRoutes = require('./editRoutes');
const addResumeRoutes = require('./addResumeRoutes');
const deleteResumeRoutes = require('./deleteResumeRoutes');

router.use('/', homeRoutes)
router.use('/api', apiRoutes);
// router.use('/save', saveRoutes);
router.use('/edit', editRoutes);
router.use('/addresume', addResumeRoutes);
router.use('/deleteresume', deleteResumeRoutes);

module.exports = router;