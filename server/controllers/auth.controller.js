const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

const createJWT = require("../utils/jwt");
const bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  const { pic, name, email, password, username } = req.body;
  try {
    await User.create({
      pic,
      name,
      email,
      password: bcrypt.hashSync(password, 8),
      username,
    });
    res.send({ message: "User was registered successfully!" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.signin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({
      where: {
        username: username,
      },
    });

    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!",
      });
    }

    const token = createJWT(user.email, user.user_id);

    res.status(200).send({
      id: user.id,
      username: user.username,
      email: user.email,
      accessToken: token,
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
