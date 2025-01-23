require("dotenv").config();
const express =  require("express");
const app = express();
const dbConnect = require("./config/bookConfig");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8080;
dbConnect();
app.use(bodyParser.urlencoded({bodyParser:true}));
app.use("/book",require("./router/bookRouter"));
app.listen(PORT,(err)=>{
    if(!err)
    {
        console.log(`Server running on ${PORT}`);
    }
})