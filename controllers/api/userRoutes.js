//DEPENDECY & IMPORT//
const router = require("express").Router();
const { User } = require("../../models");


//CREATE NEW ACCOUNT//
  router.post("/", async (req, res) => {
      try {
          const dbUserData = await User.create({
              username: req.body.username,
              email: req.body.email,
              password: req.body.password,
      });
          req.session.save(() => {
          req.session.loggedIn = true;
          req.session.loggedInUserData = dbUserData;
          return res.status(200).json(dbUserData);
      });
          } catch (err) {
              console.log(err);
                  return res.status(500).json(err);
      }
  });

//LOGIN//
  router.post("/login", async (req, res) => {
      try {
          const dbUserData = await User.findOne({
              where: {
              username: req.body.username,
              // email: req.body.email,
          }, 
      });

      if (!dbUserData) {
          res.status(400).json({
              message: "Error❗⛔ Invalid login credentials❗⛔",
          });
          return;
      }
//PASSWORD CHECK//
  const validPassword = await dbUserData.checkPassword(req.body.password);
      if (!validPassword) {
          res.status(400).json({
              message: "Error❗⛔ Invalid login credentials❗⛔",
      });
          return;
      }
//SAVE DATA SESS.//
  req.session.save(() => {
  req.session.loggedIn = true;
  req.session.loggedInUserData = dbUserData;
      console.log("💾", req.session.cookie);
          res.status(200).json({
              user: dbUserData,
              message: `Success✅ Logged in as ${User} ✅`,
          });
  });
      } catch (err) {
          console.log(err);
          res.status(500).json(err);
      }
  });

//LOGOUT//
  router.post("/logout", (req, res) => {
      if (req.session.loggedIn) {
          req.session.destroy(() => {
              res.status(204).end();
      });
      } else {
          res.status(404).end();
      }
  });

  module.exports = router;