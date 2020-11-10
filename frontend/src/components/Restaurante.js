import React from "react";
import { withRouter } from "react-router-dom";
import "../styles/Restaurante.css"
import  Menu1  from "../components/Menu1";

const Restaurante = (props) => {
  const { history } = props;
  return (
    
      <div className="Restaurante">
        <Menu1/>
        <body>
        <center>
          <div className="la-fogata py-5">
            <img
              src="./imgs/la-fogata.jpg"
              className="imghotel"
              alt="imghotel"
            />
          </div>
        </center>
        <center>
          <div className="Desc py-5">
            <h1 className="titulo1">la fogata</h1>
            <h1 className="Descripcion">
            Es un restaurante que ofrece parrilla y comida típica, enfocadas en brindar al cliente platos de la mejor calidad. Su ubicación está estratégicamente al frente de embalse de Guatapé.
              <br />
              Permite la vista mas agradable de este lugar del restaurante.  
            </h1>
            <h1 className="direccion">Cra. 30 ##31 - 32, Guatape</h1>
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
            <button className="Back btn" onClick={() => history.push("/Listas")}>
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
export default withRouter(Restaurante);