const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const categories = require("./data/categories.json");
const courses = require("./data/courses.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome To Brighters API!");
});

// sendig data when requested
app.get("/categories", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
