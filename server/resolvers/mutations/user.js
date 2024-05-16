require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.registerUser = async function (_, data, { models }) {
  const token = jwt.sign(data.email, process.env.JWT_SECRET_KEY);
  console.log(data.email, models, token);
  return { token };
};

exports.loginUser = async function (_, data, { models }) {
  console.log("LOGIN");
  const token = jwt.sign(data.email, process.env.JWT_SECRET_KEY);
  console.log(data.email, models, token);
  return { token };
};
