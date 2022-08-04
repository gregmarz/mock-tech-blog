const Post = require("./Post");
const User = require("./User");
const Comment = require("./Comment");

//user has many posts
User.hasMany(Post, {
  foreignKey: "user_id",
});

//post belongs to users
Post.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { Blog, Post, User };
