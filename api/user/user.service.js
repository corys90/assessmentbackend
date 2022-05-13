const userM = require("../user/user.model");
const bcrypt = require("bcrypt");

async function createUser(userJson) {
  const newUser = await userM.create(userJson);
  return newUser;
}

async function getUserEmail(email) {
  const user = await userM.findOne({ email });
  return user;
};

module.exports = {createUser, getUserEmail}