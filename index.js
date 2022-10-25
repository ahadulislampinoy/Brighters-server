const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const courses = require("./data/courses.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome To Brighters API!");
});

// API data sending as a response when requested
app.get("/courses", (req, res) => {
  res.send(courses);
});
app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const foundedData = courses.find((course) => course._id === id);
  res.send(foundedData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
