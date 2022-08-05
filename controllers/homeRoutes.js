const router = require("express").Router();
const { User, Post } = require("../models");

router.get("/", async (req, res) => {
  try {
    if (Post.findAll()) {
      const dbpostData = await Post.findAll();

      res.render("homepage", dbpostData);
    } else {
      res.render("homepage");
    }
  } catch (err) {
    throw err;
  }
});

router.get("/login", (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    throw err;
  }
});

module.exports = router;
