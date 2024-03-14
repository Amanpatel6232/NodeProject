const express=require("express")
const app=express()
require("./mongoose")
const studentmodel=require("./studentSchema")
app.use(express.json())
app.delete("/",async(req,resp)=>{
    const data=await studentmodel.deleteOne({rollno:req.body.rollno})
    resp.send(data)
})
app.listen(5000)