let monoose=require('mongoose');
let userSchema=monoose.Schema({
    name:String,
    email:String,
    password:String,
    role:String
});
let users=monoose.model("users",userSchema);
module.exports={users}