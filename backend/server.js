const express = require("express");
const fs=require("fs");
const app=express();

const cors=require("cors");
app.use(cors());
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Server running");
});


app.post("/track",(req,res)=>{
    console.log("Track API hit");
    const ip=req.headers["x-forwarded-for"]||req.socket.remoteAddress;
    const userAgent=req.headers["user-agent"];
    const{page,event}=req.body;

    const log = `[${new Date().toISOString()}] IP:${ip} PAGE:${page} UA:${userAgent} EVENT:${event}\n`;
    fs.appendFile("tracker.log",log,(err)=>{
        if(err) console.error(err);
    });
    res.send("Tracked");
});

app.listen(8000,()=>console.log("Server started on 8000"));