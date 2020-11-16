import React from "react";
import "../styles/Calificar.css";

import {withRouter} from "react-router-dom";
import  Menu1  from "./Menu1";

const Calificar1 = (props) => {
  const {history} = (props);
  return (
    <div className="VerificacionCalificar">
      <Menu1 />
    <div className="AlertaE row aling-items-center justify-content-center ">
      <div className="alert alert-secondary text-center" role="alert">
        <h4 className="alert-heading"> ¡Muchas Gracias! </h4>
        <p> calificación  enviada </p>
        <button type="button" className="btn btn-sm btn-outline-secondary" onClick={()=> history.push("/Contacto")}>
          Aceptar
        </button>
      </div>
    </div>
    </div>
  );
};
export default withRouter(Calificar1);