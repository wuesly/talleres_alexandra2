const express = require('express');
const router = express.Router()

router.get ("/empleado", (req,res)=> {
    res.send("estoy en get empleado")
});
router.post("/empleado", (req,res)=> {
    res.send("estoy en post empleado")
});
router.put ("/empleado", (req,res)=> {
    res.send("estoy en put empleado")
});
router.delete("/empleado", (req,res)=> {
    res.send("estoy en delete empleado")
});
router.get ("/empleado/:id "),
module.exports=router;