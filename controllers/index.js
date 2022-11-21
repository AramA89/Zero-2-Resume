const router = require('express').Router();
const apiRoutes = require('./api');
const indexRoutes = require('./api/index');
const loginRoutes = require('./loginRoutes');
const logoutRoutes = require('./logoutRoutes');
const saveRoutes = require('./saveRoutes');
const signupRoutes = require('./signupRoutes');
const editRoutes = require('./editRoutes');
const addResumeRoutes = require('./addResumeRoutes');

router.use('/', indexRoutes);
router.use('/api', apiRoutes);
router.use('/login', loginRoutes);
router.use('/logout', logoutRoutes);
router.use('/save', saveRoutes);
router.use('/signup', signupRoutes);
router.use('/edit', editRoutes);
router.use('/addresume', addResumeRoutes);

module.exports = router;