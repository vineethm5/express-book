const Book = require("../models/bookModel");
const asyncHandler= require("express-async-handler");
const addbook = asyncHandler( async (req,res)=>{
    const {bookname,author,price}= req.body;
    if(bookname && author && price)
    {
        createBook=await Book.create({
            book:bookname,
            author:author,
            price:price
        });
        res.status(200).json({createBook});
    }
    else
    {
        console.log("All fields are required");
    }


});


const showbooks=  asyncHandler(async(req,res)=>{
    const books= await Book.find()
    res.status(200).json({books});
});

const findbook= asyncHandler(async(req,res)=>{
    const findingbook= await Book.findOne({_id:req.params.id});
    if(!findingbook)
    {
        res.status(400).json({message:"book not found"});
    }
    else
    {
        res.status(200).json({findingbook});
    }
});

const updatebook = asyncHandler(async(req,res)=>{
    const bookid= await Book.findOne({_id:req.params.id});
    if(!bookid)
    {
        res.status(400).json({message:"book not found to edit"});
    }
    else
    {
        const updating= await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );
        res.status(200).json({updating});
    }
})


module.exports={addbook,showbooks,findbook,updatebook};