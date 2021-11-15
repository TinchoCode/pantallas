const mysql = require('mysql');

const mysqlConecction = mysql.createConnection({
    host:'bwaladshhcgrncn2ov2w-mysql.services.clever-cloud.com',
    user:'uhsq8l0qijefuemt',
    password:'GOEkJyNmXTwctCQ6gc3p',
    database:'bwaladshhcgrncn2ov2w'
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

