const jwt = require("jsonwebtoken");

const createJWT = (email, userId) => {
  const payload = {
    email,
    userId,
  };
  return jwt.sign(payload, process.env.SECRET, {
    expiresIn: "30d",
  });
};

module.exports = createJWT;
