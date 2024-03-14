const express=require("express")
const app=express()
require("./mongoose")
const studentmodel=require("./studentSchema")
app.use(express.json())
app.put("/",async(req,resp)=>{
    const data=await studentmodel.updateOne({rollno:req.body.rollno},{$set:req.body})
    resp.send(data)
})
app.listen(5000)