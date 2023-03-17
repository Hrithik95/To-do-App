//require the library.
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
// connect to the database
mongoose.connect('mongodb+srv://Hrithik:Hrithik1995@cluster0.h4n9ic3.mongodb.net/To-Do-App?retryWrites=true&w=majority');

//check if the connection is successful or not.(acquire the connection).
const db=mongoose.connection;

//if error occurs print the error
db.on('error',console.error.bind("Error occured"));

//if successful connection made then print the message
db.once('open',function(){
    console.log("Successfully connected to the database");
});

module.exports = db;