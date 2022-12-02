const path = require('path');
const express = require('express');
const hbs = require('hbs');
const app = express();
// app.get = (route, callback);
// -----------or------------

//relative, absolute//
// console.log(path.join(__dirname, "../public"))
const staticPath = path.join(__dirname, "../public");
const tempPath = path.join(__dirname, "../temp/views");
const partialsPath = path.join(__dirname, "../temp/partials");



//to set the view engine

app.set('view engine', 'hbs');
app.set("views", tempPath);
hbs.registerPartials(partialsPath);

//templete engine route

app.get("", (req, res) => {
    res.render("index");
})
//builtin middleware//
// app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.send("hello");
});
app.get("/about", (req, res) => {
    res.send("hello world");
});

//for 404 error page//

app.get("*", (req, res) => {
    res.render("404", {
        errorcomemnt : "opps page can,t be found"
    });
});
//error page end//


app.listen(9000, () => {
    console.log("listion");
});