
const addbook = (req,res)=>{
    res.status(200).send("Iam addbook");
    const {bookname,author,price}= req.body;

}

module.exports={addbook};