const express    = require("express");
const burger     = require("./models/burger.js");
const port       = process.env.PORT || 8080; // Initialize the port
const app        = express();                // Initializes express
const bodyParser = require("body-parser");
const path       = require("path");
const exphbs     = require("express-handlebars");

app.listen(port, ()=> console.log(`listening on port ${port}`)); // I hear you, dog

app.use( bodyParser.urlencoded({ extended: false }) ); 
app.use( bodyParser.json()                          );
app.use(express.static(path.join(__dirname, 'public')));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.get("/",(req,res)=>{
    burger.getAll((r)=>{
        let ready = [];
        let eaten = [];
        r.forEach(r=>{
            if(r.devoured === 0)
                ready.push(r);
            else
                eaten.push(r);
        });
        res.render("index",{
            ready: ready,
            eaten: eaten
        });
    });
});

app.update("/",(req,res)=>{

});

app.get('/test',(req,res)=>{
    res.sendFile( path.join(__dirname + `/public/test.html`));
});
