const express = require("express")
const mysql = require("mysql");
const ejs = require("ejs");

const app = express()

// Create a database connection configuration
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "testfullstack_students", // comment out if running example 1
  });
  
  // Establish connection with the DB
  db.connect((err) => {
    if (err) {
      throw err;
    } else {
      console.log(`Successful connected to the DB....`);
    }
  });
  
  // Initialize Body Parser Middleware to parse data sent by users in the request object
  app.use(express.json());
  app.use(express.urlencoded({ extended: true })); // to parse HTML form data
  
  // Initialize ejs Middleware
  app.set("view engine", "ejs");
  app.use("/public", express.static(__dirname + "/public"));

  // Setup server ports
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`))