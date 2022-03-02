const express = require("express");
const app = express();

const cors = require("cors");
const {db} = require('./Database/db')
const PORT = process.env.PORT || 5000;


//const path = require("path");
//process.env.PORT
//process.env.NODE_ENV => production or undefined


/// TEST DB CONNECTION ///
db.authenticate()
    .then(() => {
      console.log('Database connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });


/// MIDDLEWARE ///
app.use(cors());
app.use(express.json()); // => allows us to access the req.body


/// ROUTES ///
//Routes all api HTTP requests to be handled by /routes/api.js
//We do NOT need to send the express app object as a parameter
app.all('/api', require('./Routes/api'));
//Routes all test HTTP requests to /routes/test.js
app.all('/test', require('./Routes/test'));



///KEEP BELOW CODE UNTIL SUCCESSFUL DEPLOYMENT ON HEROKU///
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




//app begins listening for HTTP requests on specified port
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});