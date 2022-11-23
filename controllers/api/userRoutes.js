const router = require("express").Router();
const {
  User,
  ContactInfo,
  Education,
  Skills,
  WorkExperience,
  Summary,
} = require("../../models");

router.get("/", (req, res) => {
  // access our user model and run .findAll() method -- similar to SELECT * FROM users;
  User.findAll({
    attributes: { exclude: ["[password"] },
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  User.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: ContactInfo,
        attributes: [
          "id",
          "Name",
          "City",
          "State",
          "Phone_Number",
          "email",
          "created_at",
        ],
      },
      {
        model: Education,
        attributes: [
          "id",
          "School_Name",
          "City",
          "State",
          "Degree",
          "Graduation_date",
          "Currently_enrolled",
          "created_at",
        ],
        include: {
          model: ContactInfo,
          attributes: ["Name"],
        },
      },
      {
        model: Skills,
        attributes: ["id", "Skill", "created_at"],
      },
      {
        model: WorkExperience,
        attributes: [
          "id",
          "Job_Title",
          "Company",
          "City",
          "State",
          "Start_Date",
          "End_Date",
          "Currently_working",
          "created_at",
        ],
      },
      {
        model: Summary,
        attributes: ["id", "Summary", "created_at"],
      },
    ],
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  User.create({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  })
    // store user data during session
    .then((dbUserData) => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.email = dbUserData.email;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;

        res.json(dbUserData);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST to identify users
router.post("/login", (req, res) => {
  // expects {username: 'lernantino', password: 'password1234'}
  User.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(400).json({ message: "No user with that username!" });
        return;
      }
      // res.json({ user: dbUserData});
      // verify user
      const validPassword = dbUserData.checkPassword(req.body.password);

      if (!validPassword) {
        res.status(400).json({ message: "Incorrect password!" });
        return;
      }
      req.session.save(() => {
        // declare session variables
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;

        res.json({ user: dbUserData, message: "You are now logged in!" });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// users to log out
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// PUT /api/users/1 - similar to UPDATE
router.put("/:id", (req, res) => {
  // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead

  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE /api/users/1
router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
