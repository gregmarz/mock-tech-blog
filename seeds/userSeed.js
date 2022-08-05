const { User } = require("../models");

const userData = [
  {
    username: "test1",
    email: "test1@gmail.com",
    password: "test1pass",
  },
  {
    username: "test2",
    email: "test2@gmail.com",
    password: "test2pass",
  },
];

const userSeeds = async function () {
  try {
    const userGen = User.bulkCreate(userData, {
      individualHooks: true,
    });
    return userGen;
  } catch (err) {
    console.log(err);
  }
};

userSeeds();
module.exports = userSeeds;
