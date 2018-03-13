const con = require('./connection');

module.exports = {    
    
    selectAll: function(table,callback){

        con.query("SELECT * FROM ??",table,(err,res)=>{

            if (err) throw err;
            callback(res);

        });

    },

    updateOne: function(table,item,field,callback){

        con.query("UPDATE ?? SET ? WHERE ?",[table,field,item],(err,res)=>{
            
            if(err) throw err;
            callback(true);

        });

    },

    insertOne: function(table,id,callback){

        con.query("INSERT INTO ?? SET ?",[table,item],(err,res)=>{
            
            if(err) throw err;
            console.log("Added item to " + table);
            callback(true);

        });

    }

}