const {Router} = require('express');
const router = Router ();

const mysqlConnection = require('./db/db.js');

router.get('/',(req,res)=>{
  res.send('Si funciona')
})

        // Tipo usuario
    //Petición get
    router.get('/destino_hotel.js',(req,res)=>{
    mysqlConnection.query('SELECT * FROM destino_hotel.js',
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
    router.post('/destino_hotel.js', (req, res) => {
    const {nombre, descripcion} = req.body
    let tipo = [nombre,descripcion];
    let nuevoTipo = `INSERT INTO destino_hotel.js VALUES (?,?);`

    router.query(nuevoTipo,tipo, (err,results,fields) => {
     if(err){
       return console.error(err.message);
     }
     res.json({message:`destino_hotel.js Ingresado`})
   });
  });
  
     //Petición put
     router.put('/destino_hotel.js/:id', (req,res) => {
  const {nombre, descripcion} = req.body
  const { id } = req.params 
let tipo = [nombre, descripcion, id];
let ActualizarTipo =`UPDATE destino_hotel.js SET Nombre = ? Descripcion = ?  WHERE ID = ?`;
mysqlConnection.query(ActualizarTipo,tipo, (err, rows,fields) => {
   if(!err){
    res.json({status: `Los destinos de los hoteles han sido actualizados con éxito`});
   }else{
     console.log(err);
   }
});
});

  //PETICIÓN O SERVICIO DELETE - ELIMINACIÓN DE DATOS
  router.delete('/destino_hotel.js/:ID', (req,res) => {
    const { id } = req.params;
    mysqlConnection.query(`DELETE FROM destino_hotel WHERE ID =?`,[id],(err,rows,fields) => {
      if("!err"){
        res.json({status: `Los destinos de lo hoteles han sido eliminados`})
      }else{
        console.log(err);
      }
    });
  });


  


module.exports = router;