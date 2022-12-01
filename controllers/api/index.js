//DEPENDENCY//
const router = require("express").Router();
//IMPORT//
    const userRoutes = require("./userRoutes.js");
    const resumeRoutes = require("./resumeRoutes.js");

//API ROUTE PASS -->//
    router.use("/user", userRoutes);
    router.use("/resume", resumeRoutes);

    module.exports = router;