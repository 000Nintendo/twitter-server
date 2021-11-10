const { urlencoded, json } = require("express");
const express = require("express");
const morgan = require("morgan");
const { dbConnection } = require("./db/db");
const authRoutes = require("./routes/auth/signup");

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

dbConnection();

app.get("/", (req, res) => {
  res.json("server is running");
});

app.use("/user", authRoutes);

app.listen(5000, () => {
  console.info(`Server is listening on port 5000`);
});