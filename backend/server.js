const express = require("express");
const fs=require("fs");
const cors=require("cors");
const rateLimit = require("express-rate-limit");

const app=express();

const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 20,
    message: "Too many requests. Try again later."
});

app.use(cors());
app.use(limiter);
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Server running");
});


const data = require("./data.json");
app.get("/portfolio-data", (req, res) => {
    res.json(data);
});

app.post("/contact", (req, res) => {

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
    return res.status(400).send("All fields required");
    }

    const contactData = `
    NAME: ${name}
    EMAIL: ${email}
    MESSAGE: ${message}
    ------------------------
    `;

    fs.appendFile("contacts.txt", contactData, (err) => {

        if (err) {
            console.log(err);
            return res.status(500).send("Error");
        }

        res.send("Message received");
    });

});

app.get("/analytics-data", (req, res) => {

    fs.readFile("tracker.log", "utf8", (err, data) => {

        if (err) {
            return res.status(500).send("Error reading log");
        }

        const logs = data.split("\n").filter(log => log.includes("IP:"));
        const totalVisits = logs.length;
        const uniqueIPs = new Set();
        const pages = {};
        const visitsPerDay = {};

        logs.forEach((log) => {

            const ipMatch = log.match(/IP:(.*?) PAGE:/);
            const pageMatch = log.match(/PAGE:(.*?) UA:/);
            const dateMatch = log.match(/\[(.*?)T/);
            if (ipMatch) {
                uniqueIPs.add(ipMatch[1].trim());
            }
            if (pageMatch) {
                const page = pageMatch[1].trim();
                pages[page] = (pages[page] || 0) + 1;
            }
            if (dateMatch) {
                const date = dateMatch[1];
                visitsPerDay[date] =
                    (visitsPerDay[date] || 0) + 1;
            }

        });

        let mostVisited = "";
        let max = 0;
        for (let page in pages) {
            if (pages[page] > max) {
                max = pages[page];
                mostVisited = page;
            }
        }

        const visitsArray = Object.keys(visitsPerDay).map(date => ({
            day: date,
            visits: visitsPerDay[date]
        }));

        res.json({
            totalVisits,
            uniqueVisitors: uniqueIPs.size,
            mostVisited,
            visitsPerDay: visitsArray
        });
    });
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

    let mostVisitedPage = null;
    let max = 0;

    for (let page in pageCount) {
      if (pageCount[page] > max) {
        max = pageCount[page];
        mostVisitedPage = page;
      }
    }
  });
});