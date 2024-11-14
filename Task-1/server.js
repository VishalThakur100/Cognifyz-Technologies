const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/signup", (req, res) => {
  res.render("form.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
  res.redirect("/");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log(`Email: ${email}, Password: ${password}`);
  res.redirect("/");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
