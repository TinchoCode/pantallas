//AGREGAR COSAS
function nuevaOrd(){
    a = document.getElementById("id_ped").value;
    b = document.getElementById("des").value;
    c = document.getElementById("uni").value;
    d = document.getElementById("valor").value;

    fetch('http://localhost:3000/nuevaOrd', {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify({
        id_pedido: a,
        descripcion: b,
        unidades: c,
        valor_cu: d
    })
})
.then(res => { return res.json()})
.then(data => console.log(data))
}

function nuevoMozo(){
    a = document.getElementById("dni").value;
    b = document.getElementById("nom").value;
    c = document.getElementById("ape").value;
    d = document.getElementById("edad").value;
    e = document.getElementById("tem").value;
    f = document.getElementById("salud").value;
    g = document.getElementById("reem").value;
    h = document.getElementById("dom").value;

    fetch('http://localhost:3000/nuevoMozo', {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify({
        dni: a,
        nombre: b,
        apellido: c,
        edad: d,
        tiempo_en_mesa: e,
        salud: f,
        reemplazo: g,
        domicilio: h
    })
})
.then(res => {return res.json()})
.then(data => console.log(data))
}


function nuevoDom(){
    a = document.getElementById("id_dom").value;
    b = document.getElementById("calle").value;
    c = document.getElementById("num_dom").value;
    d = document.getElementById("ciudad").value;

    fetch('http://localhost:3000/nuevoDom', {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify({
        id_domicilio: a,
        calle: b,
        numero: c,
        ciudad: d
    })
})
.then(res => { return res.json()})
.then(data => console.log(data))
}


function nuevaFac(){
    a = document.getElementById("num_fac").value;
    b = document.getElementById("cdg").value;
    c = document.getElementById("cdc").value;
    d = document.getElementById("mAsig").value;
    e = document.getElementById("ped").value;
    f = document.getElementById("mSer").value;

    fetch('http://localhost:3000/nuevaFac', {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify({
        numero: a,
        comprobante_gasto: b,
        comprobante_compra: c,
        mozo_asig: d,
        pedido: e,
        mesa_serv: f
    })
})
.then(res => {return res.json()})
.then(data => console.log(data))
}


function nuevaMesa(){
    a = document.getElementById("num_mesa").value;
    b = document.getElementById("mat").value;
    c = document.getElementById("color").value;
    d = document.getElementById("cds").value;

    fetch('http://localhost:3000/nuevaMesa', {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify({
        numero: a,
        material: b,
        color: c,
        cantSillas: d
    })
})
.then(res => { return res.json()})
.then(data => console.log(data))
}

//ACTUALIZAR COSAS

function actualizarMesa(){
    a2 = document.getElementById("num_mesa2").value;
    b2 = document.getElementById("mat2").value;
    c2 = document.getElementById("color2").value;
    d2 = document.getElementById("cds2").value;
    

    fetch('http://localhost:3000/ActualizarMesa', {
    method: 'PUT',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify({
        numero: a2,
        material: b2,
        color: c2,
        cantSillas: d2
    })
})
.then(res => { return res.json()})
.then(data => console.log(data))
}

function actualizarItems(){
    a2 = document.getElementById("id_ped2").value;
    b2 = document.getElementById("des2").value;
    c2 = document.getElementById("uni2").value;
    d2 = document.getElementById("valor2").value;
    

    fetch('http://localhost:3000/ActualizarItems', {
    method: 'PUT',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify({
        id_pedido: a2,
        descripcion: b2,
        unidades: c2,
        valor_cu: d2
    })
})
.then(res => { return res.json()})
.then(data => console.log(data))
}

function actualizarDom(){
    a2 = document.getElementById("id_dom2").value;
    b2 = document.getElementById("calle2").value;
    c2 = document.getElementById("num_dom2").value;
    d2 = document.getElementById("ciudad2").value;
    

    fetch('http://localhost:3000/ActualizarDom', {
    method: 'PUT',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify({
        id_domicilio: a2,
        calle: b2,
        numero: c2,
        ciudad: d2
    })
})
.then(res => { return res.json()})
.then(data => console.log(data))
}

function actualizarMozo(){
    a = document.getElementById("dni2").value;
    b = document.getElementById("nom2").value;
    c = document.getElementById("ape2").value;
    d = document.getElementById("edad2").value;
    e = document.getElementById("tem2").value;
    f = document.getElementById("salud2").value;
    g = document.getElementById("reem2").value;
    h = document.getElementById("dom2").value;

    fetch('http://localhost:3000/ActualizarMozo', {
    method: 'PUT',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify({
        dni: a,
        nombre: b,
        apellido: c,
        edad: d,
        tiempo_en_mesa: e,
        salud: f,
        reemplazo: g,
        domicilio: h
    })
})
.then(res => {return res.json()})
.then(data => console.log(data))
}

function actualizarFac(){
    a = document.getElementById("num_fac2").value;
    b = document.getElementById("cdg2").value;
    c = document.getElementById("cdc2").value;
    d = document.getElementById("mAsig2").value;
    e = document.getElementById("ped2").value;
    f = document.getElementById("mSer2").value;

    fetch('http://localhost:3000/ActualizarFac', {
    method: 'PUT',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify({
        numero: a,
        comprobante_gasto: b,
        comprobante_compra: c,
        mozo_asig: d,
        pedido: e,
        mesa_serv: f
    })
})
.then(res => {return res.json()})
.then(data => console.log(data))
}

//ELIMINAR COSAS

function eliminarPed(){
    a2 = document.getElementById("id_ped3").value;
    
    fetch('http://localhost:3000/EliminarPed', {
    method: 'DELETE',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify({
        id_pedido: a2
    })
})
.then(res => { return res.json()})
.then(data => console.log(data))
}

function eliminarMesa(){
    a2 = document.getElementById("num_mesa3").value;
    
    fetch('http://localhost:3000/EliminarMesa', {
    method: 'DELETE',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify({
        numero: a2
    })
})
.then(res => { return res.json()})
.then(data => console.log(data))
}

function eliminarDom(){
    a2 = document.getElementById("id_dom3").value;
    
    fetch('http://localhost:3000/EliminarDom', {
    method: 'DELETE',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify({
        id_domicilio: a2
    })
})
.then(res => { return res.json()})
.then(data => console.log(data))
}

function eliminarFac(){
    a2 = document.getElementById("num_fac3").value;
    
    fetch('http://localhost:3000/EliminarFac', {
    method: 'DELETE',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify({
        numero: a2
    })
})
.then(res => { return res.json()})
.then(data => console.log(data))
}

function eliminarMozo(){
    a2 = document.getElementById("dni3").value;
    
    fetch('http://localhost:3000/EliminarMozo', {
    method: 'DELETE',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify({
        dni: a2
    })
})
.then(res => { return res.json()})
.then(data => console.log(data))
}