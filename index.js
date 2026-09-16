let express=require("express");
let app=express();
let hrRoutes=require("./routes/hr_route");
app.use("/api/hr",hrRoutes);




app.listen(3000,()=>{
    console.log("server listening on port 3000")
})