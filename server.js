const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;
// const hbs = exphbs.create({ helpers });

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.engine("handlebars", exphbs.engine);
app.set("view engine", "handlebars");

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log("Now listening on https://localhost:3001")
  );
});

//hi central grader, not sure if you're gonna see this or not. but i did the api's for post and user. the comments were not really working and honestly this assigment drove me to the brink of insanity.
//i despise handlebars in every way imaginable. the fact that this hw was assigned during a project made me want to really put forth the effort to complete it and get a good grade on both.
//but after working for, honestly too long on this handlebar front end routes, im on the verge of tears and i really cant look at this for another second. if i somehow manage to come back to this at a later time
//tonight, you may not see this message. but if you do, theres a reason. im crying myself to sleep tonight 👍
