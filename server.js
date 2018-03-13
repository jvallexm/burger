const express    = require("express");
const bodyParser = require("body-parser");
const path       = require("path");
const orm        = require(`./config/orm.js`);

const port       = process.env.PORT || 8080; // Initialize the port
const app        = express();                // Initializes express

app.listen(port, ()=> console.log(`listening on port ${port}`)); // I hear you, dog

app.use( bodyParser.urlencoded({ extended: false }) ); 
app.use( bodyParser.json()                          );
app.use( "/", express.static('app/public')          ); // Expresses the public file as static

orm.updateOne("burgers",{id: 1},{devoured: 1},(r)=>{
    console.log("ding");
    orm.selectAll("burgers",(r)=>console.log(r));
})