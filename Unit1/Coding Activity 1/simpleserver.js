const express = require("express");
 
const app =express();
const port = 4100;
app.get('/res',(req,res)=> {
    res.send("hello everyone",)
})
 app.listen(port,() => {
    console.log(`example app listening on port ${port}`)
 })
 