const orm        = require(`../config/orm.js`);

module.exports = {
    
    eatIt: function(obj,callback){

        orm.updateOne("burgers",obj,{devoured: 1},(r)=>{
            callback(r);
        });

    },

    makeIt: function(obj,callback){

        orm.insertOne("burgers",obj,(r)=>{
            callback(r);
        });

    },

    getAll: function(callback){

        orm.selectAll("burgers",(r)=>{
            callback(r);
        });

    }

}