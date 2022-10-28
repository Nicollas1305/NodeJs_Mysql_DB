const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
const { connection } = require('mongoose');
var app = express();
//Configuring express server
app.use(bodyparser.json());

//MySQL details
var mysqlConnection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'Banana1305*',
    database: 'sakila',
});

mysqlConnection.connect(function(err){
    if(err) throw err;
    console.log("Connected!!!")
})


/*mysqlConnection.connect((err)=> {
    if(!err)
    console.log('Connection Established Successfully');
    else
    console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
});*/

//Establish the server connection
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 3306;
app.listen(port, () => console.log(`Listening on port ${port}..`));