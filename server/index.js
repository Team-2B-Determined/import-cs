const express = require("express");
const app = express();

const cors = require("cors");
const {db} = require('./Database/db')
const path = require("path");
const PORT = process.env.PORT || 5000;

//process.env.PORT
//process.env.NODE_ENV => production or undefined

//middleware
app.use(cors());
app.use(express.json()); // => allows us to access the req.body


// app.use(express.static(path.join(__dirname, "client/build")));
// app.use(express.static("./client/build")); => for demonstration


/*
if (process.env.NODE_ENV === "production") {
  //server static content
  //npm run build
  app.use(express.static(path.join(__dirname, "../client/build")));
}

console.log(__dirname);
console.log(path.join(__dirname, "../client/build"));
*/


//ROUTES//
app.use("/", require('./Routes/Routes'));


//app begins listening for HTTP requests on specified port
app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});
