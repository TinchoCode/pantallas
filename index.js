const express = require('express');
const app = express();
const morgan = require('morgan');

//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//Funciones de espera 
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Access-Control-Allow-Credentials', false);
    next();
});

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Rutas
app.use(require('./routes/employees'));

//Inicio del server
app.listen(3000, () => {
    console.log('Server on Port 3000', app.get('port'));

});