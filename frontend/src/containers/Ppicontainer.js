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
import Eliminar1 from "../components/Eliminar1";
import Eliminar2 from "../components/Eliminar2";
import Listar from "../components/Listar";
import Listar1 from "../components/Listar1";
import Listas from "../components/Listas";
import Listas1 from "../components/Listas1";
import Hotel from "../components/Hotel";
import Hotel1 from "../components/Hotel1";
import Restaurante from "../components/Restaurante";
import Editar from "../components/Editar";
import Editar1 from "../components/Editar1";
import Editar2 from "../components/Editar2";
import Agregar from "../components/Agregar";
import Agregar1 from "../components/Agregar1";
import Agregar2 from "../components/Agregar2";
import Actualizar from "../components/Actualizar";
import Actualizar1 from "../components/Actualizar1";
import Actualizar2 from "../components/Actualizar2";
import Restaurante1 from "../components/Restaurante1";
import Sitio_interes from "../components/Sitio_interes";
import Sitio_interes1 from "../components/Sitio_interes1";
import Calificar from "../components/Calificar";
import Calificar1 from "../components/Calificar1";
import Contacto from "../components/Contacto";

export default function Ppicontainer() {
  return (
    <div className="Ppicontainer">
      <BrowserRouter>
        <React.Fragment>
          <Route path="/" exact component={Inicio} />
          <Route path="/Registro" exact component={Registro} />
          <Route path="/Registrod" exact component={Registrod} />
          <Route path="/Registroc" exact component={Registroc} />
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
          <Route path="/Eliminar1" exact component={Eliminar1} />
          <Route path="/Eliminar2" exact component={Eliminar2} />
          <Route path="/Restaurante" exact component={Restaurante} />
          <Route path="/Restaurante1" exact component={Restaurante1} />
          <Route path="/Sitio_interes" exact component={Sitio_interes} />
          <Route path="/Sitio_interes1" exact component={Sitio_interes1} />
          <Route path="/Editar" exact component={Editar} />
          <Route path="/Editar1" exact component={Editar1} />
          <Route path="/Editar2" exact component={Editar2} />
          <Route path="/Agregar" exact component={Agregar} />
          <Route path="/Agregar1" exact component={Agregar1} />
          <Route path="/Agregar2" exact component={Agregar2} />
          <Route path="/Actualizar" exact component={Actualizar} />
          <Route path="/Actualizar1" exact component={Actualizar1} />
          <Route path="/Actualizar2" exact component={Actualizar2} />
          <Route path="/Calificar" exact component={Calificar} />
          <Route path="/Calificar1" exact component={Calificar1} /> 
          <Route path="/Contacto" exact component={Contacto} />
         
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}
