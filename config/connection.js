const mysql = require("mysql");

const connection = {

    host: `127.0.0.1`,
    port: `3306`,
    user: `root`,
    password: ``,
    database: `burgers_db`
    
}

function connect(){
    return mysql.createConnection(connection);
}

module.exports = {
    connect: connect
};


