require("dotenv").config();
const express =  require("express");
const app = express();
const Book = require("./models/bookModel");
Book();
const PORT = process.env.PORT || 8080;


app.use("/book",require("./router/bookRouter"));
app.listen(PORT,(err)=>{
    if(!err)
    {
        console.log(`Server running on ${PORT}`);
    }
})