import express from "express";
const app=express();
app.listen(4000,()=>{
    console.log('Server has been startd',4000);
})
app.get('/',(req,res)=>{
    res.send('<h1>hello developer drive</h1>');
});