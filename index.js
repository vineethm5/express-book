require("dotenv").config();
const express =  require("express");
const app = express();
const bodyParser = require("body-parser");
const dbConnect = require("./config/bookConfig");
dbConnect();

const PORT = process.env.PORT || 8080;
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(express.urlencoded({ extended: true }));
app.use("/book",require("./router/bookRouter"));
app.listen(PORT,(err)=>{
    if(!err)
    {
        console.log(`Server running on ${PORT}`);
    }
})
