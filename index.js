const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("./queries");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/users", getUsers);
app.get("/users/:id", getUserById);
app.post("/users", createUser);
app.put("/users/:id", updateUser);
app.delete("/users/:id", deleteUser);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
