const Blog = require("./Blog");
const Post = require("./Post");
const User = require("./User");

//user has multiple blogs
User.hasMany(Blog, {
  foreignKey: "",
});

//user has many posts
User.hasMany(Post, {
  foreignKey: "",
});

// single blogs belong to a user
Blog.belongsTo(User, {
  foreignKey: "",
});

//blog has many posts
Blog.hasMany(Post, {
  foreignKey: "",
});

//Post belongs to blog
Post.belongsTo(Blog, {
  foreignKey: "",
});

//post belongs to users
Post.belongsTo(User, {
  foreignKey: "",
});

module.exports = { Blog, Post, User };
