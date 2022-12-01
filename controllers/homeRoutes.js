//DEPENDENCY & IMPORT//
const router = require("express").Router();
const { Resume } = require("../models");
const User = require("../models/User");

//HOMEPAGE LOAD//
router.get("/", async (req, res) => {
  try {
      const resumeData = await Resume.findAll({
//JOIN TO INCLUDE --> USER + POST//
          include: [
              {
                  model: User,
                  attributes: ["id", "username"],
              },
          ],
          order: [["createdAt", "DESC"]],
      });
//MAP --> POSTARRAY//
      const resumes = resumeData.map((resume) => resume.get({ plain: true }));
//PACKAGE POSTS PRIOR TO --> RENDER//
      const packagedResumes = [];
      let currentPackage = [];
      for (let i = 0; i < resumes.length; i++) {
          if (i == 0) {
              currentPackage.push(resumes[i]);
              packagedResumes.push(currentPackage);
              currentPackage = [];
          } else {
              currentPackage.push(resumes[i]);
          }
//ODD # OR <1 RULE//
          if (i % 2 == 0 || resumes.length - i <= 1) {
              if (currentPackage.length != 0) {
                  packagedResumes.push(currentPackage);
              }
              currentPackage = [];
          }
      }
//RENDER PAGE --> HANDLEBARS//
      res.render("home", {
          loggedIn: req.session.loggedIn,
          loggedInUserData: req.session.loggedInUserData,
          resumes: packagedResumes,
      });
  } catch (err) {
      res.status(500).json(err);
  }
});

module.exports = router;