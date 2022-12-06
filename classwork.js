const http = require ("http");
const prompt = require("prompt-sync")();
const name = prompt("enter the name:")
http.createServer(function(req, res){
    res.write(name);
    console.log(name);
    // res.write("math = 30%")
    // res.write("nodjs = 30%")
    // res.write("science= 30%")
    // res.write("expressjs = 30%")
    // res.write("health = 30%")

    // console.log("math = 30%")
    // console.log("nodjs = 30%")
    // console.log("science= 30%")
    // console.log("expressjs = 30%")
    // console.log("health = 30%")
    
    res.end()

}).listen(2020); 

