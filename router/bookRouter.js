const express = require("express");
const router = express.Router();
const {addbook} = require("../controller/bookController");

router.post("/",addbook);

module.exports=router;