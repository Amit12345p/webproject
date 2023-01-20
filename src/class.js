
const express = require('express');
const path = require('path');
// import "../public/css/style.css"
const app = express();

// app.use(express.static(path.join(__dirname,"public")))

const staticPath=path.join(__dirname,"../public")

// // console.log(staticPath)

app.use(express.static(staticPath))


// app.get("/",function(req,res){
//     res.sendFile(path.join(__dirname,'../public',"index.html"))
// })
app.listen(9000,() => {
    console.log("listing")
})