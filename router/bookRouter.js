const express = require("express");
const router = express.Router();
const {addbook,showbooks,findbook,updatebook} = require("../controller/bookController");

router.post("/",addbook);
router.get("/",showbooks);
router.get("/:id",findbook);
router.put("/:id",updatebook);

module.exports=router;