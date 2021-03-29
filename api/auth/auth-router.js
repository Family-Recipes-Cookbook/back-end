const router = require("express").Router();
const bcryptjs = require("bcryptjs");

const User = require("../users/user-model");
const { isValid } = require("../users/user-service");
const { generateToken } = require("../../utils/generateToken");
const { checkPayload } = require("../middleware/checkPayload");
const { checkUsernameUnique } = require("../middleware/checkUsernameUnique");

router.post("/register", [checkPayload, checkUsernameUnique], (req, res) => {
  const credentials = req.body;

  if (isValid(credentials)) {
    const rounds = process.env.BCRYPT_ROUNDS || 8;
    const hash = bcryptjs.hashSync(credentials.password, rounds);
    credentials.password = hash;

    User.add(credentials)
      .then((user) => {
        res.status(201).json(user);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  } else {
    res.status(400).json({ error: "Please fill out all required fields." });
  }
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (isValid(req.body)) {
    User.findBy({ username: username })
      .then(([user]) => {
        if (user && bcryptjs.compareSync(password, user.password)) {
          const token = generateToken(user);
          res.status(200).json({ message: `Welcome, ${user.username}`, token });
        } else {
          res.status(401).json({ error: "Invalid credentials" });
        }
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  } else {
    res.status(400).json({ error: "Username and password required" });
  }
});

module.exports = router;
