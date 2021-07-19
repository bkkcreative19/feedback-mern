import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import createJWT from "../utils/jwt.js";
import bcrypt from "bcryptjs";

const emailRegexp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const register = asyncHandler(async (req, res) => {
  let { name, email, password, pic } = req.body;
  let errors = [];
  if (!name) {
    errors.push({ name: "required" });
  }
  if (!email) {
    errors.push({ email: "required" });
  }
  if (!emailRegexp.test(email)) {
    errors.push({ email: "invalid" });
  }
  if (!password) {
    errors.push({ password: "required" });
  }

  if (errors.length > 0) {
    return res.status(422).json({ errors: errors });
  }

  try {
    const user = await User.findOne({ email: email });
    let newUser;
    if (user) {
      return res
        .status(422)
        .json({ errors: [{ user: "email already exists" }] });
    } else {
      newUser = new User({
        name,
        email,
        password,
        pic,
      });
    }
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) throw err;
        newUser.password = hash;
        try {
          const savedUser = await newUser.save();
          res.status(200).json({ success: true, result: savedUser });
        } catch (err) {
          res.status(500).json({
            errors: [{ error: err }],
          });
        }
      });
    });
  } catch (error) {
    res.status(500).json({
      errors: [{ error: "Something went wrong" }],
    });
  }
  // const { name, email, password, pic } = req.body;
  // const userExists = await User.findOne({ email });

  // if (userExists) {
  //   res.status(400);
  //   throw new Error("User already Exits");
  // }
  // const user = await User.create({
  //   name,
  //   email,
  //   password,
  //   pic,
  // });

  // if (user) {
  //   res.status(201).json({
  //     _id: user._id,
  //     name: user.name,
  //     email: user.email,
  //     pic: user.pic,
  //     token: createJWT(user._id),
  //   });
  // } else {
  //   res.status(400);
  //   throw new Error("Error making account");
  // }
});

const login = async (req, res) => {
  const { email, password } = req.body;

  let errors = [];
  if (!email) {
    errors.push({ email: "required" });
  }
  if (!emailRegexp.test(email)) {
    errors.push({ email: "invalid email" });
  }
  if (!password) {
    errors.push({ password: "required" });
  }
  if (errors.length > 0) {
    console.log(errors);
    return res.status(422).json({ errors: errors });
  }

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      res.status(404).json({
        errors: [{ user: "not found" }],
      });
    } else {
      try {
        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
          return res.status(400).json({ errors: [{ password: "incorrect" }] });
        }

        let access_token = createJWT(user.email, user._id, 360000);

        jwt.verify(access_token, "adnbfoesrte24fds", (err, decoded) => {
          if (err) {
            res.status(500).json({ errors: err });
          }
          if (decoded) {
            return res.status(200).json({
              success: true,
              token: access_token,
              message: user,
            });
          }
        });
      } catch (err) {
        res.status(500).json({ errors: err });
      }
    }
  } catch (err) {
    res.status(500).json({ errors: err });
  }

  // if (user && (await user.matchPassword(password))) {
  //   res.json({
  //     _id: user._id,
  //     name: user.name,
  //     email: user.email,
  //     pic: user.pic,
  //     token: createJWT(user._id),
  //   });
  // } else {
  //   res.status(400);
  //   throw new Error("Invalid email or password");
  // }
};

export { register, login };
