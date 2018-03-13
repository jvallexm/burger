const orm        = require(`../config/orm.js`);

module.exports = {
    
    eatIt: function(id,callback){

        orm.updateOne("burgers",{id: id},{devoured: 1},(r)=>{
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