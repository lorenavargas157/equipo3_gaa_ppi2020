import React from "react";
import { withRouter } from "react-router-dom";
import "../styles/Hotel.css";
import  Menu1  from "../components/Menu1";

const Sitio_interes = (props) => {
  const { history } = props;
  return (
    
      <div className="Hotel">
        <Menu1/>
        <body>
        <center>
          <div className="la-fogata py-5">
            <img
              src="./imgs/calles_recuerdo.jpg"
              className="imghotel"
              alt="imghotel"
            />
          </div>
        </center>
        <center>
          <div className="Desc py-5">
            <center><h1 className="titulo1">calles del recuerdo</h1></center>
            <center><h1 className="Descripcion">
           Es este el pueblo colorido del oriente antioqueño, sus habitantes intentarán conservar aquella parte de la historia que les fue arrebatada.
            </h1></center>
          </div>
        </center>
        <center>
        <div>
          <button className="Back btn" onClick={() => history.goBack()}>
            <img
              className="mr-3"
              src="./imgs/Iconatras.png"
              width="100"
              height="60"
              alt="Logo"
              loading="lazy"
            />
          </button>
          <button type="button" class="btn btn-secondary" onClick={() => history.push("/Mapa1")}>UBICAR</button>
          <span>
            <button className="Back btn" onClick={() => history.push("/calificar")}>
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
export default withRouter(Sitio_interes);