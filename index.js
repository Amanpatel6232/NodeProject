const express=require("express")
const app=express()
const cors=require("cors")
app.use(cors())
app.use(express.json())
const studentmodel=require("./studentSchema")
require("./mongoose")


app.post("/",async (req,resp)=>{

    const data=await new studentmodel({rollno:101,name:"Ram",marks:45})
    const result=await data.save()
    resp.send(result)

})
app.get("/",async(req,resp)=>{
    const result=await studentmodel.find()
    resp.send(result)

})
app.post("/",async(req,resp)=>{
    const data=await new studentmodel(req.body)
    const result=await data.save()
    
})
app.put("/",async(req,resp)=>{
    const data=await studentmodel.updateOne({rollno:req.body.rollno},{$set:req.body})
    resp.send(data)
})
app.delete("/",async(req,resp)=>{
    const data=await studentmodel.deleteOne({rollno:req.body.rollno})
    resp.send(data)
})
app.listen(5000)