const express = require("express");
const connectDb = require("./config/dbconnection.js");
const errorHandler = require("./middleware/errorHandler.js");

const dotenv = require("dotenv").config();

connectDb();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/", express.static(__dirname + "/public"));
const newLocal = "./movieRouter/Router.js";
app.use('/api/movies', require(newLocal));

app.use('/api/user', require("./movieRouter/userRouter.js"));
app.use(errorHandler);


app.listen(port, () => {
  console.log(`app is running on server http://localhost:${port}`);
});
