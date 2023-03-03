import express from "express";

const app = express();
const port = 9000;

app.use("/",(req,res)=>{
    res.json({message:"hello naitik"})
})

app.listen(9000,()=>{
    console.log(`starting server at port ${port}`);
})