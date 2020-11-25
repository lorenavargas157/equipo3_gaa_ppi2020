const {Router} = require('express');
const router = Router.js();

const mysqlConnection = require('./db/db.js');

router.get('/',(req,res)=>{
  res.send('Si funciona')
})

        // Tipo usuario
    //Petición get
router.get('/sitios_de_interes.js',(req,res)=>{
    mysqlConnection.query('SELECT * FROM sitios_de_interes.js',
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
   router.post('/sitios_de_interes.js', (req, res) => {
    const {nombre, descripcion} = req.body
    let tipo = [nombre,descripcion];
    let nuevoTipo = `INSERT INTO sitios_de_interes.js VALUES (?,?);`

   mysqlConnection.query(nuevoTipo,tipo, (err,results,fields) => {
     if(err){
       return console.error(err.message);
     }
     res.json({message:`sitios_de_interes.js Ingresado`})
   });
  });
  
     //Petición put
  router.put('/sitios_de_interes.js/:id', (req,res) => {
  const {nombre, descripcion} = req.body
  const { id } = req.params 
let tipo = [nombre, descripcion, id];
let ActualizarTipo =`UPDATE sitios_de_interes.js SET Nombre = ? Descripcion = ?  WHERE ID = ?`;
mysqlConnection.query(ActualizarTipo,tipo, (err, rows,fields) => {
   if(!err){
    res.json({status: `Los sitios de interes ha sido actualizado con éxito`});
   }else{
     console.log(err);
   }
});
});

  //PETICIÓN O SERVICIO DELETE - ELIMINACIÓN DE DATOS
  router.delete('/sitios_de_interes.js/:ID', (req,res) => {
    const { id } = req.params;
    mysqlConnection.query(`DELETE FROM sitios de interes WHERE ID =?`,[id],(err,rows,fields) => {
      if("!err"){
        res.json({status: `El sitio de interes ha sido eliminado`})
      }else{
        console.log(err);
      }
    });
  });


  


module.exports = router;