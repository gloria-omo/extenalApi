// config
const mongoose = require('mongoose');
require("dotenv").config()
const DB = process.env.db

mongoose.connect(DB).then(()=>{
    console.log("Database connection established successfully");
})
.catch((error)=>{
    console.log(`Error connecting to database ${error.message}`);
})