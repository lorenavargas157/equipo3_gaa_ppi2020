const {Router} = require('express');
const router = Router ();

const mysqlConnection = require('./db/db.js');

router.get('/',(req,res)=>{
  res.send('Si funciona')
})

        // Tipo usuario
    //Petición get
    router.get('/usuario.js',(req,res)=>{
    mysqlConnection.query('SELECT * FROM usuario.js',
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
    router.post('/usuario.js', (req, res) => {
    const {nombre, descripcion} = req.body
    let tipo = [nombre,descripcion];
    let nuevoTipo = `INSERT INTO usuario.js VALUES (?,?);`

    router.query(nuevoTipo,tipo, (err,results,fields) => {
     if(err){
       return console.error(err.message);
     }
     res.json({message:`usuario.js Ingresado`})
   });
  });
  
     //Petición put
     router.put('/usuario.js/:id', (req,res) => {
  const {nombre, descripcion} = req.body
  const { id } = req.params 
let tipo = [nombre, descripcion, id];
let ActualizarTipo =`UPDATE usuario.js SET Nombre = ? Descripcion = ?  WHERE ID = ?`;
mysqlConnection.query(ActualizarTipo,tipo, (err, rows,fields) => {
   if(!err){
    res.json({status: `usuario ha sido actualizado con éxito`});
   }else{
     console.log(err);
   }
});
});

  //PETICIÓN O SERVICIO DELETE - ELIMINACIÓN DE DATOS
  router.delete('/usuario.js/:ID', (req,res) => {
    const { id } = req.params;
    mysqlConnection.query(`DELETE FROM usuario WHERE ID =?`,[id],(err,rows,fields) => {
      if("!err"){
        res.json({status: `El usuario se ha sido eliminado`})
      }else{
        console.log(err);
      }
    });
  });


  


module.exports = router;