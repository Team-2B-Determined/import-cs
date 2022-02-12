const express = require("express");
const app = express();
const cors = require("cors");
//const pool = require("./db");
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
-app.get("/", async (req, res) => {
  try {
    res.send('routing successful');
  } catch (err) {
    console.error(err.message);
  }
});

async function tester() {
  return await user.findOne()
};

const {user} = require('./Models/User')
app.get('/user', async (req, res) => {
  let firstUser = await tester();
  console.log(firstUser)
  res.send(firstUser.email)
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


//app begins listening for HTTP requests on specified port
app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});
