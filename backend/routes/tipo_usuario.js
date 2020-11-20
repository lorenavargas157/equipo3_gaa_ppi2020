const {Router} = require('express');
const tipo_usuario = tipo_usuario ();

const mysqlConnection = require('./db/db.js');

tipo_usuario.get('/',(req,res)=>{
  res.send('Si funciona')
})

        // Tipo usuario
    //Petición get
    tipo_usuario.get('/tipo_usuario.js',(req,res)=>{
    mysqlConnection.query('SELECT * FROM tipo_usuario.js',
    (err,rows,fields)=>{
      if(!err)
     {
       res.json(rows);
     }else{
       console.log(err);
     }
    })
}) 

    //Petición post
    tipo_usuario.post('/tipo_usuario.js', (req, res) => {
    const {nombre, descripcion} = req.body
    let tipo = [nombre,descripcion];
    let nuevoTipo = `INSERT INTO tipo_usuario.js VALUES (?,?);`

   mysqlConnection.query(nuevoTipo,tipo, (err,results,fields) => {
     if(err){
       return console.error(err.message);
     }
     res.json({message:`tipo_usuario.js Ingresado`})
   });
  });
  
     //Petición put
     tipo_usuario.put('/tipo_usuario.js/:id', (req,res) => {
  const {nombre, descripcion} = req.body
  const { id } = req.params 
let tipo = [nombre, descripcion, id];
let ActualizarTipo =`UPDATE tipo_usuario.js SET Nombre = ? Descripcion = ?  WHERE ID = ?`;
mysqlConnection.query(ActualizarTipo,tipo, (err, rows,fields) => {
   if(!err){
    res.json({status: `Tipo usuario ha sido actualizado con éxito`});
   }else{
     console.log(err);
   }
});
});

  //PETICIÓN O SERVICIO DELETE - ELIMINACIÓN DE DATOS
  tipo_usuario.delete('/tipo_usuario.js/:ID', (req,res) => {
    const { id } = req.params;
    mysqlConnection.query(`DELETE FROM tipoUsuario WHERE ID =?`,[id],(err,rows,fields) => {
      if("!err"){
        res.json({status: `El tipo usuario ha sido eliminado`})
      }else{
        console.log(err);
      }
    });
  });


  


module.exports = tipo_usuario;