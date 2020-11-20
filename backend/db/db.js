const mysql =require('mysql');
const mysqlConnection= mysql.createConnection({
    // db creada https://console.clever-cloud.com/
host:'bsmwaitvppld2zvczdec-mysql.services.clever-cloud.com',
user:'ughpkuu6yfuqgnve',
password:'UIMP3JPDk00orVRElmLT',
database:'bsmwaitvppld2zvczdec',
multipleStatements:true
});

mysqlConnection.connect(function(err){
if(err){
    console.error(err);
    return;
}else{

    console.log('base de datos conectada');
}

})
module.exports = mysqlConnection;