const connect = require('./connection');

module.exports = {    
    
    selectAll: function(table,callback){

        let con = connect.connect();

        con.query("SELECT * FROM ??",table,(err,res)=>{

            if (err) throw err;
            callback(res);

        });

        con.end();

    },

    updateOne: function(table,item,field,callback){

        let con = connect.connect();

        con.query("UPDATE ?? SET ? WHERE ?",[table,field,item],(err,res)=>{
            
            if(err) throw err;
            callback(true);

        });

        con.end();

    },

    insertOne: function(table,item,callback){

        let con = connect.connect();

        con.query("INSERT INTO ?? SET ?",[table,item],(err,res)=>{
            
            if(err) throw err;
            console.log("Added item to " + table);
            callback(true);

        });

        con.end();

    }

}