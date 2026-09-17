let express=require("express");
let app=express();


let hrroutes=require("./routes/hr_route");
let emprouter=require("./routes/emp_route")

app.use("/api/hr",hrroutes);
app.use("/api/emp",emprouter);

app.listen(3000,()=>{
    console.log("server listening to port number 3000");
})