const express = require('express');
const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello World!</h1>");
});

app.get("/contact",function(req, res){
    res.send("<h1>Contact me at matejbendik@gmail.com </h1>");
});

app.get("/about",function(req, res){
    res.send("<h1>Hi my name is Matej Bendik </h1>");
});

app.get("/hobbies",function(req, res){                  // toto je Route, pouzivame na kazdu jednu stranku novu
    res.send("<p>code, coffee and books</p>");
})

app.listen(3000, function () {
    console.log('Server started on port 3000');
});







