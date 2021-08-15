const express = require("express");
const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get("/",(req,res)=>{
    console.log(req.query)
    res.send("Hello World")
})

app.listen(3000,()=>{
    console.log("server running on port 3000")
});