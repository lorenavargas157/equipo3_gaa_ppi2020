const express = require("express");
const path = require("path");
const app = express ()

var cors = require("cors");
app.use(cors());
app.use(express.json());

const tipo_usuario = require("./src/routes/tipo_usuario.js");
const usuario = require("./src/routes/usuario.js");
const usuario_destino = require("./src/routes/usuario_destino.js");
const destino = require("./src/routes/destino.js");
const rutas = require("./src/routes/rutas.js");
const destino_hotel = require("./src/routes/destino_hotel.js");
const hotel = require("./src/routes/hotel.js");
const destino_restaurante = require("./src/routes/destino_restaurante.js");
const restaurante = require("./src/routes/restaurante.js");
const sitios_interes = require("./src/routes/sitios_interes.js");


app.use("/api", tipo_usuario);
app.use("/api", usuario);
app.use("/api", usuario_destino);
app.use("/api", destino);
app.use("/api", rutas);
app.use("/api", destino_hotel);
app.use("/api", hotel);
app.use("/api", destino_restaurante);
app.use("/api", restaurante);
app.use("/api", sitios_interes);

app.use(express.urlencoded({ extended: false }));

app.listen(3001, () => {
  console.log("server started");
});