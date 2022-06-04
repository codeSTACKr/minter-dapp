// Test Server

const express = require("express")
const path = require("path");
  
const app = express();
const port = 3000;
  
// Setting path for directory 
const static_path = path.join(__dirname, "");
app.use(express.static(static_path));
app.use(express.urlencoded({ extended: true }));
  
// Handling request 
app.post("/wallet", (req) => {
   console.log(req.body.address) // This is the user's wallet address
})
  
// Server Setup
app.listen(port, () => {
   console.log(`server is running at ${port}`);
});