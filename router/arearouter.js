const express = require('express');
const router = express.Router()

router.get ("/area", (req,res)=> {
    res.send("estoy en get area")
});
router.post("/area", (req,res)=> {
    res.send("estoy en post area")
});
router.put ("/area", (req,res)=> {
    res.send("estoy en put area")
});
router.delete("/area", (req,res)=> {
    res.send("estoy en delete area")
});
router.get ("/area/:id "),
module.exports=router;