const sequelize = require("../config/connection");
const { Blog, Post, User } = require("../models");

const userSeed = require("./userSeed.json");
const blogSeed = require("./blogSeed.json");
const postSeed = require("./postSeed.json");

async function DBSEED() {
  await sequelize.sync({ force: true });
  await blogSeed();
  await userSeed();
  await postSeed();
}
