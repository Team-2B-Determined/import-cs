const express = require("express");
const app = express();

const cors = require("cors");
const {db} = require('./Database/db')
//const path = require("path");
const PORT = process.env.PORT || 5000;

const router = express.Router()

//process.env.PORT
//process.env.NODE_ENV => production or undefined

///TEST DB CONNECTION///
db.authenticate()
    .then(() => {
      console.log('Database connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });

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
//app.use("/", require('./Routes/Routes'));
router.use('/user', require("./Routes/Routes.User"));


//app begins listening for HTTP requests on specified port
app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});

///SYNCHRONIZATION///
/*
const models = require('./Models')
models.db.sync()
    .then(() => {
        console.log("Models Synchronized")
    })
    .catch(err => {
        console.error("Unable to sync models", err)
    });*/


///ASSOCIATIONS///
const User = require('./Models/User')(db);
const Setting = require('./Models/Setting')(db);
const KeyboardMaps = require('./Models/KeyboardMaps')(db);
const HistoryEntry = require('./Models/HistoryEntry')(db);

//Setting -> User
User.hasOne(Setting, {
    foreignKey: {
        allowNull: false
    }
});
Setting.belongsTo(User);

//*KeyboardMap -> Setting
Setting.hasMany(KeyboardMaps, {
    foreignKey: {
        allowNull: false
    }
});
KeyboardMaps.belongsTo(Setting);

//*HistoryEntry -> User
User.hasMany(HistoryEntry, {
    foreignKey: {
        allowNull: false
    }
});
HistoryEntry.belongsTo(User)


///SYNCHRONIZATION///
User.sync({force: false, alter: true});
Setting.sync({force: false, alter: true});
KeyboardMaps.sync({force: false, alter: true});
HistoryEntry.sync({force: false, alter: true});
