const express = require('express');
const bodyParser = require('body-parser');      // requirnutie body-parsera, ktory moze brat veci medzi strankami

const app = express();  // nova appka ktora bude pouzivat express modul
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));     // urlencoded sa pouziva na branie infa z html formularov 


app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");         // root route
});

app.post("/",function (req, res){       // kod bezi na backende a mame web app a ne website

    var num1 = Number(req.body.num1);   
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("The result is: " + result);
});


// BMI calculator

app.get('/bmiCalculator', (req, res) => {           // callback funkcia hovori co sa stane ked pride user na podstranku bmiCalculator
  res.sendFile(__dirname + "/bmiCalculator.html");         // ked pride na bmiCalculator v url, tak mu posle tu html stranku s tym istym nazvom
});

app.post("/bmiCalculator",function (req, res){       
    
    var weight = parseFloat(req.body.weight);    
    var height = parseFloat(req.body.height);

    var result = weight/(height*height);

    res.send("You BMI is: " + result *10000);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);         // zapnutie servera, logne to info o serveri
});
