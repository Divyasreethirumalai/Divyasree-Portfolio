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

app.get("/analytics", (req, res) => {
  fs.readFile("tracker.log", "utf-8", (err, data) => {
    if (err) return res.send("No data");

    const lines = data.trim().split("\n");

    let totalVisits = lines.length;
    let uniqueIPs = new Set();
    let pageCount = {};
    let visitsPerDay = {};

    lines.forEach(line => {
      const ipMatch = line.match(/IP:(.*?) /);
      const pageMatch = line.match(/PAGE:(.*?) /);
      const dateMatch = line.match(/\[(.*?)T/);

      if (ipMatch) uniqueIPs.add(ipMatch[1]);

      if (pageMatch) {
        const page = pageMatch[1];
        pageCount[page] = (pageCount[page] || 0) + 1;
      }

      if (dateMatch) {
        const date = dateMatch[1];
        visitsPerDay[date] = (visitsPerDay[date] || 0) + 1;
      }
    });

    // find most visited page
    let mostVisitedPage = null;
    let max = 0;

    for (let page in pageCount) {
      if (pageCount[page] > max) {
        max = pageCount[page];
        mostVisitedPage = page;
      }
    }

    res.json({
      totalVisits,
      uniqueVisitors: uniqueIPs.size,
      mostVisitedPage,
      visitsPerDay
    });
  });
});