const express = require("express");
const router = express.Router();
const {addbook} = require("../controller/bookController");

router.get("/",addbook);

module.exports=router;