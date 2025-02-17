const express = require('express');
const router = express.Router()

router.get ("/empresa", (req,res)=> {
    res.send("estoy en get empresa")
});
router.post("/empresa", (req,res)=> {
    res.send("estoy en post empresa")
});
router.put ("/empresa", (req,res)=> {
    res.send("estoy en put empresa")
});
router.delete("/empresa", (req,res)=> {
    res.send("estoy en delete empresa")
});
router.get ("/empresa/:id "),
module.exports=router;