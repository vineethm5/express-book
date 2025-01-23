const Book = require("../models/bookModel");
const asyncHandler= require("express-async-handler");
const addbook = asyncHandler( async (req,res)=>{
    res.status(200).send("Iam addbook");
    const {bookname,author,price}= req.body;
    if(!bookname && !author && !price)
    {
        createBook=await Book.create({
            name:bookname,
            author:author,
            price:price
        });
        res.status(200).json(createBook);
    }
    else
    {
        console.log("All fields are required");
    }


})

module.exports={addbook};