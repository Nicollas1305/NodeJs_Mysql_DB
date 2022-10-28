const mysql = require('mysql2');
const express = require('express');
const bodyparser = require('body-parser');
var app = express();
//Configuring express server
app.use(bodyparser.json());

//MySQL details
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sakila',
    });
mysqlConnection.connect((err)=> {
    if(!err)
    console.log('Connection Established Successfully');
    else
    console.log('Connection Failed!'+ JSON.stringify(err,undefined,2)); 
});

//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 3306;
app.listen(port, () => console.log(`Listening on port ${port}..`));