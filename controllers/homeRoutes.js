const router = require("express").Router();
const { User, Post } = require("../models");

// router.get("/", (req, res) => {
//   const dbpostData = Post.findAll({ include: [User] }).then();

//   res.render("homepage", dbpostData);

//   res.render("homepage");
// });

// router.get("/login", (req, res) => {
//   try {
//     res.render("login");
//   } catch (err) {
//     throw err;
//   }
// });

module.exports = router;
