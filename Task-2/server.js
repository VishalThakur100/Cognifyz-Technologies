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
  const { name, email, age } = req.body;
  if (!name || !email || !age) {
    return res.status(400).send("All fields are required!");
  }
  if (age < 18) {
    return res.status(400).send("You must be at least 18 years old.");
  }
  req.app.locals.users = req.app.locals.users || [];
  req.app.locals.users.push({ name, email, age });
  res.redirect("/");
});

app.get('/users', (req, res) => {
  res.json(req.app.locals.users);
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

