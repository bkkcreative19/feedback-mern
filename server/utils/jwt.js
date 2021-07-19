import jwt from "jsonwebtoken";

const createJWT = (email, userId) => {
  const payload = {
    email,
    userId,
  };
  return jwt.sign(payload, "adnbfoesrte24fds", {
    expiresIn: "30d",
  });
};

export default createJWT;
