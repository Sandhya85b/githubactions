const express=require("express")
const taskModel=require("../models/task.model")
const taskRoute=express.Router();
taskRoute.post("/add",async(req,res)=>{
    try{
let task=await taskModel.create(req.body)

    }catch(err){

    }
})
taskRoute.get("/get/:id",async()=>{
    try{
        let task=await taskModel.create(req.params.id)
        res.status(201).json({msg:""})
        
            }catch(err){
        
            }
        })
module.exports=taskRoute