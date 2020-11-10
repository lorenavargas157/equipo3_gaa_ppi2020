import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Inicio from "../components/Inicio";
import Registro from "../components/Registro";
import Registrod from "../components/Registrod";
import Registroc from "../components/Registroc";
import Registro1 from "../components/Registro1";
import Mapa1 from "../components/Mapa1";
import Listah from "../components/Listah";
import Listah1 from "../components/Listah1";
import Eliminar from "../components/Eliminar";
import Listar from "../components/Listar";
import Listar1 from "../components/Listar1";
import Listas from "../components/Listas";
import Listas1 from "../components/Listas1";
import Hotel from "../components/Hotel";
import Hotel1 from "../components/Hotel1";
import Restaurante from "../components/Restaurante";
import Restaurante1 from "../components/Restaurante1";
import Sitio_interes from "../components/Sitio_interes";
import Sitio_interes1 from "../components/Sitio_interes1";

import Contacto from "../components/Contacto";

export default function Ppicontainer() {
  return (
    <div className="Ppicontainer">
      <BrowserRouter>
        <React.Fragment>
          <Route path="/" exact component={Inicio} />
          <Route path="/Registro" exact component={Registro} />
          <Route path="/Registrod" exact component={Registrod} />
          <Route path="/Registrod" exact component={Registroc} />
          <Route path="/Registro1" exact component={Registro1} />
          <Route path="/Mapa1" exact component={Mapa1} />
          <Route path="/Listah" exact component={Listah} />
          <Route path="/Listah1" exact component={Listah1} />
          <Route path="/Listar" exact component={Listar} />
          <Route path="/Listar1" exact component={Listar1} />
          <Route path="/Listas" exact component={Listas} />
          <Route path="/Listas1" exact component={Listas1} />
          <Route path="/Hotel" exact component={Hotel} />
          <Route path="/Hotel1" exact component={Hotel1} />
          <Route path="/Eliminar" exact component={Eliminar} />
          <Route path="/Restaurante" exact component={Restaurante} />
          <Route path="/Restaurante1" exact component={Restaurante1} />
          <Route path="/Sitio_interes" exact component={Sitio_interes} />
          <Route path="/Sitio_interes1" exact component={Sitio_interes1} />
          <Route path="/Contacto" exact component={Contacto} />
         
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}
