const express = require("express");
const SubjectModel = require("../models/Subject.models")
const subjectRouter = express.Router();

subjectRouter.post("/create",async(req,res)=>{
    try{
        let newSubject = new SubjectModel(req.body);
        await newSubject.save();
        res.status(200).send("Subject Added successfully")
    }catch(err){
        res.status(400).send("cannot create new subject")
    }
})
subjectRouter.get("/",async(req,res)=>{
    try{
        let data= await SubjectModel.find()
        res.status(200).send(data)
    }catch(err){
        res.status(400).send("error while getting subjects",err)
    }
})

module.exports = {subjectRouter}