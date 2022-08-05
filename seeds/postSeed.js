const { Post } = require("../models");

const postData = [
  {
    title: "test1Title",
    info: "test1Info",
    username: "test10000",
  },
  {
    title: "test55Title",
    info: "test55Info",
    username: "test55",
  },
];

const postSeeds = async function (req, res) {
  try {
    const seedGen = Post.bulkCreate(postData, {
      individualHooks: true,
    });
    return seedGen;
  } catch (err) {
    console.log(err);
  }
};

module.exports = postSeeds;
