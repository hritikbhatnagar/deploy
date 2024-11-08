
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();


// dotenv.config();


const app=express();

app.get("/",(req,res)=>{
    res.send("<h1>home page..</h1>")
});

app.get("*",(req,res)=>{
    res.send("<i>not found</i>")
})
// console.log(process.env.PORT)
app.listen(process.env.PORT,()=>{
    console.log(`server is created at ${process.env.PORT}`);
});