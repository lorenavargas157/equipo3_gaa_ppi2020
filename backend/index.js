const express= require('express');
const app = express();

// definir todos los componentes, modulos app
const usuario= require('./routes/usuario');// crud
const hotel = require('./routes/hotel');// crud
//const colegios = require('./routes/colegios');// crud


//ajustes
app.set('port',3000)



// Middleware
app.use(express.json());


// ajustess
app.use('/api',usuario);
app.use('/api/hotel',hotel);
//app.use('/api/c',colegios);


app.listen(app.get('port'),()=>{
    console.log(`Servidor corriendo en puerto  ${app.get('port')}`)
}) 