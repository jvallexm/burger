const burger     = require("../models/burger.js");

module.exports = function(app){

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
    
    app.post("/new",(req,res)=>{
    
        let newObj = req.body;
        console.log(req.body);
    
        burger.makeIt(req.body,(r)=>{
            console.log("the experience is consummated");
            res.send("reload!!");
        })
        
    });
    
    app.post("/smash",(req,res)=>{
    
        let obj = {id: parseInt(req.body.id)};
        burger.eatIt(obj,(r)=>{
            res.send("relod!!");
        });
    
    });

}