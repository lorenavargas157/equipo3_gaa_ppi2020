import React from "react";
import { withRouter } from "react-router-dom";

const Eliminar2 = (props) => {
  const { history } = props;
  return (
    <div className="calificar1">
      <div className="AlertaE row aling-items-center justify-content-center ">
        <div className="alert alert-secondary text-center" role="alert">
          <h1 className="alert-heading"> ¿desea eliminar este lugar? </h1>

          <button
            type="button"
            className="btn btn-sm btn-outline-secondary"
            onClick={() => history.push("/Listas1")}
          >
            Aceptar
          </button>
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary"
            onClick={() => history.push("/Listas1")}
          >
            cancelar
          </button>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Eliminar2);