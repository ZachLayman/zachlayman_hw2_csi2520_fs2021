const express = require("express")
const ejs = require("ejs");
const mysql = require("mysql");

const app = express()
// Render static files
app.use(express.static('public'));
  
  // Initialize Body Parser Middleware to parse data sent by users in the request object
  app.use(express.json());
  app.use(express.urlencoded({ extended: true })); // to parse HTML form data
  
  // Initialize ejs Middleware

  app.set("view engine", "ejs");
  app.use("/public", express.static(__dirname + "/public"));

  // routes
app.get("/", (req, res) => {
  res.render("index");
});

// Setup server ports
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));