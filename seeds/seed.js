const sequelize = require("../config/connection");
const { Post, User } = require("../models");

const userSeed = require("./userSeed.js");
// const postSeed = require("./postSeed.js");

async function DBSEED() {
  await sequelize.sync({ force: true });
  await userSeed();
  // await postSeed();
}

DBSEED();
