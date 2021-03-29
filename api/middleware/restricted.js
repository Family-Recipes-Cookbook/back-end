const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../../utils/secret");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    res.status(401).json({ error: "Please provide token" });
  } else {
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) {
        res
          .status(401)
          .json({ error: "Please provide valid token: " + err.message });
      } else {
        req.decodedToken = decoded;
        next();
      }
    });
  }
};
