const jwt = require("jsonwebtoken");
const { jwtSecret } = require("./secret");

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
  };
  const options = {
    expiresIn: "3600s",
  };
  return jwt.sign(payload, jwtSecret, options);
}

module.exports = {
  generateToken,
};
