const express = require("express");

require("./config/config");

require("dotenv").config();

const router = require("./routers/router")

const app = express();

app.use(express.json());  

const port = process.env.port

app.use("/api/external-data/", router)

 
app.listen(port,()=>{
    console.log(`Server is running on port :${port}`);
});
