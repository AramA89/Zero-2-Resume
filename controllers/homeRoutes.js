const router = require('express').Router();

// Render homepage view
router.get('/', (req, res) => {
    console.log('in homepage route')
    res.render('homepage', {loggedIn: req.session.loggedIn} )
})

// Render login view
router.get('/login', async (req, res) => {
    res.render('login', {
        loggedIn: req.session.loggedIn,
        loggedInUserData: req.session.loggedInUserData,
    });
});

// Render signup view
router.get('/signup', async (req, res) => {
    res.render('signup', {
        loggedIn: req.session.loggedIn,
        loggedInUserData: req.session.loggedInUserData,
    });
});

module.exports = router;