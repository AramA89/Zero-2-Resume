//DEPENDENCY//
const router = require("express").Router();
//IMPORT API ROUTES --> SEPARATELY//
    const apiRoutes = require("./api");
    const loginRoutes = require("./loginRoutes");
    const resumeRoutes = require("./resumeRoutes");
    const signupRoutes = require("./signupRoutes");
    const logoutRoutes = require("./logoutRoutes");
    const dashboardRoutes = require("./dashboard-routes");
    const editRoutes = require("./editRoutes");
    const addResume = require("./addResume");
    const homeRoute = require('./homeRoutes');
    const viewResumeRoutes = require("./viewResumeRoutes");

//ROUTE --> CONTROLLER//
    router.use("/api", apiRoutes);
    router.use('/resume', resumeRoutes);
    router.use("/login", loginRoutes);
    router.use("/signup", signupRoutes);
    router.use("/logout", logoutRoutes);
    router.use("/dashboard", dashboardRoutes);
    router.use("/edit", editRoutes);
    router.use("/addresume", addResume);
    router.use('/', homeRoute);
    router.use("/viewresume", viewResumeRoutes);
   
    module.exports = router;
