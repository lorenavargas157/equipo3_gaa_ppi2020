import React from "react";
import { withRouter } from "react-router-dom";
import "../styles/Hotel.css";

const Hotel1 = (props) => {
  const { history } = props;
  return (
    
      <div className="Hotel">
        <body>
        <center>
          <div className="Hotel1 py-5">
            <img
              src="./imgs/Hotel1.jpg"
              className="imghotel"
              alt="imghotel"
            />
          </div>
        </center>
        <center>
          <div className="Desc py-5">
            <h1 className="titulo1">Hotel brisas de Guatapé</h1>
            <h1 className="Descripcion">
              -7 habitaciones para no fumadores
              <br />
              -Servicio de limpieza diario
              <br />
              -Restaurante
              <br />
              -Estacionamiento
              <br />
              -Terraza
              <br />
              -Asadores
            </h1>
            <h1 className="direccion">Carrera 28 # 31 -88 Guatape Colombia</h1>
          </div>
        </center>
        <center>
        <div>
          <button className="Back btn" onClick={() => history.goBack()}>
            <img
              className="mr-2"
              src="./imgs/Iconatras.png"
              width="50"
              height="45"
              alt="Logo"
              loading="lazy"
            />
          </button>
          <button type="button" class="btn btn-secondary" onClick={() => history.push("/Actualizar")}>ACTUALIZAR</button>
          <span>
            <button className="Back btn" onClick={() => history.push("/Listar1")}>
              <img
                src="./imgs/Iconnext.png"
                width="45"
                height="35"
                alt="Logo"
                loading="lazy"
              />
            </button>
          </span>
        </div>
        </center>
        </body>
      </div>
    
  );
};
export default withRouter(Hotel1);