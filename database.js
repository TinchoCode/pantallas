const mysql = require('mysql');

const mysqlConecction = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'restaurante'
});

mysqlConecction.connect(function (err) {
    if(err){
        console.log(err);
        return;
    }else{
        console.log('DB is conected');
    }
});

module.exports = mysqlConecction;