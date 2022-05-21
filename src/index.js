const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 1000;

const rootFileWeb = path.join(__dirname, "../public");
const WebStorePath = path.join(__dirname, "./WebStore/views");
const partialPath = path.join(__dirname, "./WebStore/partials");
app.set("view engine", "hbs");
app.set("views", WebStorePath);
hbs.registerPartials(partialPath);             
app.use(express.static(rootFileWeb));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/home", (req, res) => {
  res.render("home");
});
    
app.get("/about", (req, res) => {
  res.render("about");
});  
app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("*", (req, res) => {
  res.render("404error", {
    errMsg: "Oops! Page Not Found",
  });
});

app.listen(port, () => {
  console.log("This is working");
});
