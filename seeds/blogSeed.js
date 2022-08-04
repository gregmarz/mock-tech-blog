const { Blog } = require("../models");

const blogData = [{}];

const blogSeeds = async function () {
  try {
    const blogGen = Blog.bulkCreate(blogData, {
      individualHooks: true,
    });
    return blogGen;
  } catch (err) {
    console.log(err);
  }
};
module.exports = blogSeeds;
