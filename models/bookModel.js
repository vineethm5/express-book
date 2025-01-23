const mongoose  = require("mongoose");
const bookSchema =  mongoose.Schema({
    book:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },

    price:{
        type:String,
        required:true
    }
},
{
    timestamp:true
});

module.exports = mongoose.model("book",bookSchema);