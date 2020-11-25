const {Router} = require('express');
const router = Router ();

const mysqlConnection = require('./db/db.js');

router.get('/',(req,res)=>{
  res.send('Si funciona')
})

        // Tipo usuario
    //Petición get
    router.get('/restaurantes.js',(req,res)=>{
    mysqlConnection.query('SELECT * FROM restaurantes.js',
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
    router.post('/restaurantes.js', (req, res) => {
    const {nombre, descripcion} = req.body
    let tipo = [nombre,descripcion];
    let nuevoTipo = `INSERT INTO restaurantes.js VALUES (?,?);`

    router.query(nuevoTipo,tipo, (err,results,fields) => {
     if(err){
       return console.error(err.message);
     }
     res.json({message:`restaurantes.js Ingresado`})
   });
  });
  
     //Petición put
     router.put('/restaurantes.js/:id', (req,res) => {
  const {nombre, descripcion} = req.body
  const { id } = req.params 
let tipo = [nombre, descripcion, id];
let ActualizarTipo =`UPDATE restaurantes.js SET Nombre = ? Descripcion = ?  WHERE ID = ?`;
mysqlConnection.query(ActualizarTipo,tipo, (err, rows,fields) => {
   if(!err){
    res.json({status: `Los restaurantes han sido actualizadas con éxito`});
   }else{
     console.log(err);
   }
});
});

  //PETICIÓN O SERVICIO DELETE - ELIMINACIÓN DE DATOS
  router.delete('/restaurantes.js/:ID', (req,res) => {
    const { id } = req.params;
    mysqlConnection.query(`DELETE FROM restaurantes WHERE ID =?`,[id],(err,rows,fields) => {
      if("!err"){
        res.json({status: `Los restaurantes han sido eliminadas`})
      }else{
        console.log(err);
      }
    });
  });


  


module.exports = router;