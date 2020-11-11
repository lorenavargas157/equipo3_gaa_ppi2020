const express = require('express');//tabNIne
const router = express.Router();
const mysqlConnection =require('../db/db');


/// contenido
router.get('/usuario',(req,res)=>{
mysqlConnection.query('SELECT * from usuario ',(err,rows,fiels)=>{
if(!err){
   res.json(rows); 
}else{
console.log(err);
}});
})// fin

module.exports = router;