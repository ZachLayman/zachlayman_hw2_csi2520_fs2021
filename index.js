const express = require("express")
const ejs = require("ejs");

const app = new express()
// Render static files
app.use(express.static('public'));
  

  // routes
app.get("/", (req, res) => {
  res.send('hello from my express framework');
});

// Setup server ports
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));