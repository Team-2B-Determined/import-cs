let express = require("express");
let app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const path = require("path");



/// MIDDLEWARE ///
app.use(cors());            // => enables CORS on each request route
app.use(express.json());    // => allows us to parse requests with JSON payloads

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build"))); // => Allows static files to be served from the client build
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../client/build", "index.html"))
    })
}



/// ROUTES ///
//Routes all api HTTP requests to be handled by /routes/api.js
app.use('/api', require('./Routes/api'));

//Routes all test HTTP requests to /routes/test.js
app.use('/test', require('./Routes/test'));



/// START SERVER ///
//app begins listening for HTTP requests on specified port
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});