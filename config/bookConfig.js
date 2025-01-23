const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");

const dbConnect = asyncHandler ( async()=>{
    try
    {
    const mongdb= await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Connected Successfully", mongoose.connection.name);
    }
    catch(error)
    {
        console.log(error);
        process.exit(1);
    }
});

module.exports=dbConnect;
