const express = require('express');
const router = express.Router();

const mysqlConecction = require('../database');

//OTRO TUTO
router.get('/', (req, res)=>{
    res.json({'Title':'Pagina Princiapal'});
});

// VER LAS COSAS
//DOMICILIOS
router.get('/domicilios', (req, res) => {
    mysqlConecction.query('SELECT * FROM domicilio', (err, rows, fields) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});
//MOZOS
router.get('/mozos', (req, res) => {
    mysqlConecction.query('SELECT * FROM mozos', (err, rows, fields) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});
//MESAS
router.get('/mesas', (req, res) => {
    mysqlConecction.query('SELECT * FROM mesas', (err, rows, fields) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});
//ITEM
router.get('/items', (req, res) => {
    mysqlConecction.query('SELECT * FROM items', (err, rows, fields) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});
//FACTURAS
router.get('/factura', (req, res) => {
    mysqlConecction.query('SELECT * FROM factura', (err, rows, fields) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

//AGREGAR COSAS
//NUEVO ITEMS
router.post('/nuevaOrd', (req,res) =>{
    const {id_pedido, descripcion, unidades, valor_cu} = req.body;

    const query = `
        INSERT INTO items(id_pedido,descripcion,unidades,valor_cu)
        VALUES(?, ?, ?, ?)
    `;
    mysqlConecction.query(query, [id_pedido, descripcion, unidades, valor_cu], (err, rows, fields) =>{
        if(!err){
            res.json({Status: "Orden guardado"});
        }else{
            console.log(err);
        }
    });
});

//NUEVO MOZO
router.post('/nuevoMozo', (req,res) =>{
    const {dni ,nombre ,apellido ,edad,tiempo_en_mesa , salud ,reemplazo ,domicilio} = req.body;

    const query = `
        INSERT INTO mozos(dni ,nombre ,apellido ,edad,tiempo_en_mesa , salud ,reemplazo ,domicilio)
        VALUES(?, ?, ?, ?, ?, ?, ?, ?)
    `;
    mysqlConecction.query(query, [dni ,nombre ,apellido ,edad,tiempo_en_mesa , salud ,reemplazo ,domicilio], (err, rows, fields) =>{
        if(!err){
            res.json({Status: "Mozo guardado"});
        }else{
            console.log(err);
        }
    });
});

//NUEVO DOMICILIO
router.post('/nuevoDom', (req,res) =>{
    const {id_domicilio , calle , numero , ciudad } = req.body;

    const query = `
        INSERT INTO domicilio(id_domicilio ,calle ,numero ,ciudad )
        VALUES(?, ?, ?, ?)
    `;
    mysqlConecction.query(query, [id_domicilio , calle , numero , ciudad ], (err, rows, fields) =>{
        if(!err){
            res.json({Status: "Domicilio guardado"});
        }else{
            console.log(err);
        }
    });
});

//NUEVA FACTURA
router.post('/nuevaFac', (req,res) =>{
    const {numero ,comprobante_gasto ,comprobante_compra ,mozo_asig, pedido, mesa_serv} = req.body;

    const query = `
        INSERT INTO factura(numero ,comprobante_gasto ,comprobante_compra ,mozo_asig, pedido, mesa_serv)
        VALUES(?, ?, ?, ?, ?, ?)
    `;
    mysqlConecction.query(query, [numero ,comprobante_gasto ,comprobante_compra ,mozo_asig, pedido, mesa_serv], (err, rows, fields) =>{
        if(!err){
            res.json({Status: "Factura guardado"});
        }else{
            console.log(err);
        }
    });
});

//NUEVA MESA
router.post('/nuevaMesa', (req,res) =>{
    const {numero, material, color, cantSillas} = req.body;

    const query = `
        INSERT INTO mesas(numero, material, color, cantSillas)
        VALUES(?, ?, ?, ?)
    `;
    mysqlConecction.query(query, [numero, material, color, cantSillas], (err, rows, fields) =>{
        if(!err){
            res.json({Status: "Mesa guardado"});
        }else{
            console.log(err);
        }
    });
});


//ACTUALIZAR COSAS
//MESAS
router.put('/ActualizarMesa', (req,res)=>{
    const {numero, material, color, cantSillas} = req.body;
    const query = `
        UPDATE mesas
        SET 
            material = ?,
            color = ?,
            cantSillas = ?
        WHERE numero = ?;
    `
    mysqlConecction.query(query, [material, color, cantSillas, numero], (err, rows, fields) =>{
        if(!err){
            res.json({Status: "Mesa actualizada"});
        }else{
            console.log(err)
        }
    })
});

//ITEMS
router.put('/ActualizarItems', (req,res)=>{
    const {id_pedido, descripcion, unidades, valor_cu} = req.body;
    const query = `
        UPDATE items
        SET 
            descripcion = ?,
            unidades = ?,
            valor_cu = ?
        WHERE id_pedido = ?;
    `
    mysqlConecction.query(query, [descripcion, unidades, valor_cu, id_pedido], (err, rows, fields) =>{
        if(!err){
            res.json({Status: "Items actualizado"});
        }else{
            console.log(err)
        }
    })
});

//DOMICILIO
router.put('/ActualizarDom', (req,res)=>{
    const {id_domicilio , calle , numero , ciudad} = req.body;
    const query = `
        UPDATE domicilio
        SET 
            calle = ?,
            numero = ?,
            ciudad = ?
        WHERE id_domicilio = ?;
    `
    mysqlConecction.query(query, [calle , numero , ciudad, id_domicilio], (err, rows, fields) =>{
        if(!err){
            res.json({Status: "Domicilio actualizado"});
        }else{
            console.log(err)
        }
    })
});

//MOZOS
router.put('/ActualizarMozo', (req,res)=>{
    const {dni ,nombre ,apellido ,edad,tiempo_en_mesa , salud ,reemplazo ,domicilio} = req.body;
    const query = `
        UPDATE mozos
        SET 
            nombre = ?,
            apellido = ?,
            edad = ?,
            tiempo_en_mesa = ?,
            salud = ?,
            reemplazo = ?,
            domicilio = ?
        WHERE dni = ?;
    `
    mysqlConecction.query(query, [nombre ,apellido ,edad,tiempo_en_mesa , salud ,reemplazo ,domicilio, dni], (err, rows, fields) =>{
        if(!err){
            res.json({Status: "Mozos actualizado"});
        }else{
            console.log(err)
        }
    })
});

//FACTURA
router.put('/ActualizarFac', (req,res)=>{
    const {numero ,comprobante_gasto ,comprobante_compra ,mozo_asig, pedido, mesa_serv} = req.body;
    const query = `
        UPDATE factura
        SET 
            comprobante_gasto = ?,
            comprobante_compra = ?,
            mozo_asig = ?,
            pedido = ?,
            mesa_serv = ?
        WHERE numero = ?;
    `
    mysqlConecction.query(query, [comprobante_gasto ,comprobante_compra ,mozo_asig, pedido, mesa_serv, numero], (err, rows, fields) =>{
        if(!err){
            res.json({Status: "Factura actualizado"});
        }else{
            console.log(err)
        }
    })
});

//ELIMINAR COSAS
//ITEMS
router.delete('/EliminarPed', (req,res)=>{
    const {id_pedido} = req.body;
    console.log(req.body);
    const query = `
        DELETE FROM items WHERE id_pedido = ?
    `
    mysqlConecction.query(query, [id_pedido], (err, rows, fields) =>{
        if(!err){
            res.json({Status: "Pedido Eliminado"});
        }else{
            console.log(err)
        }
    })
});

//MESAS
router.delete('/EliminarMesa', (req,res)=>{
    const {numero} = req.body;
    const query = `
        DELETE FROM mesas WHERE numero = ?
    `
    mysqlConecction.query(query, [numero], (err, rows, fields) =>{
        if(!err){
            res.json({Status: "Mesas Eliminado"});
        }else{
            console.log(err)
        }
    })
});

//DOMICILIO
router.delete('/EliminarDom', (req,res)=>{
    const {id_domicilio} = req.body;
    const query = `
        DELETE FROM domicilio WHERE id_domicilio = ?
    `
    mysqlConecction.query(query, [id_domicilio], (err, rows, fields) =>{
        if(!err){
            res.json({Status: "Domicilio Eliminado"});
        }else{
            console.log(err)
        }
    })
});

//FACTURA
router.delete('/EliminarFac', (req,res)=>{
    const {numero} = req.body;
    const query = `
        DELETE FROM factura WHERE numero = ?
    `
    mysqlConecction.query(query, [numero], (err, rows, fields) =>{
        if(!err){
            res.json({Status: "Domicilio Eliminado"});
        }else{
            console.log(err)
        }
    })
});

//MOZO
router.delete('/EliminarMozo', (req,res)=>{
    const {dni} = req.body;
    const query = `
        DELETE FROM mozos WHERE dni = ?
    `
    mysqlConecction.query(query, [dni], (err, rows, fields) =>{
        if(!err){
            res.json({Status: "Domicilio Eliminado"});
        }else{
            console.log(err)
        }
    })
});

module.exports = router;    