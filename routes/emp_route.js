let express = require('express');
let router = express.Router();
router.post("/register",(req,res)=>{
    console.log(req.body);
    res.send("register page called");
})
router.post("/login",(req,res)=>{
    res.send("login page called");
})
router.get("/view task",(req,res)=>{
    res.send("view task page called");
})
router.put("/updatestatus",(req,res)=>{
    res.send("update status page called");
})
module.exports=router;