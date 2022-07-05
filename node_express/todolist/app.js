const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');           // this is using for accessing different file

const app = express();

const items = ["Buy food", "Cook food", "Eat food"];
const workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));                      // we need to use this because express don't know about some new files, every static files should be in public folder

app.get('/', (req, res) => {

    const day = date.getDate();                            // day variable will take actuall day from date.js getDate() function

    res.render('list', {listTitle: day, newListItems: items});                 // render == sendFile(), file list must be inside a views folder
    // kindOfDay is from views/list.ejs

});

app.post('/', (req, res) => {

    const item = req.body.newItem;                        // newItem is name from input form in the list.ejs file

    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");                                  
    }


    // when post request is triggered, variable item will take the value from that html input field and redited us to the home route which triggers the app.get()
});


app.get("/work", (req,res) => {
    res.render("list", {listTitle: "Work List", newListItems: workItems}); 
})

app.post('/work', (req, res) => {

    const item = req.body.newItem;

    workItems.push(item);
    
    res.redirect("/work");

});

app.get("/about", (req, res) => {
    res.render("about");
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});