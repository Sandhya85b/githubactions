const mongoose=require("mongoose")

const ConnectToDb=()=>{
mongoose.connect("mongodb://127.0.0.1:27017/mydb")
.then(()=>{
    console.log("Connected to db")
})
}

module.exports=ConnectToDb
