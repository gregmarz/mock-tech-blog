const { Post } = require("../models");

const postSeeds = async function (req, res) {
  try {
    const blogGen = Blog.bulkCreate();
  } catch (err) {
    console.log(err);
  }
};

module.exports = postSeeds;
