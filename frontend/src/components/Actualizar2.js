import React from "react";
import { withRouter } from "react-router-dom";

const Actualizar2 = (props) => {
  const { history } = props;
  return (
    <center>
      <div>
        <div class="form-group" col-md-6>
          <label for="exampleFormControlTextarea1">Actualizar infomacion</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button
          type="button"
          class="btn btn-secondary"
          onClick={() => history.push("/Sitio_interes1")}
        >
          Cancelar
        </button>

        <button
          type="button"
          class="btn btn-secondary"
          onClick={() => history.push("/Sitio_interes1")}
        >
          Listo
        </button>
      </div>
    </center>
  );
};

export default withRouter(Actualizar2);
