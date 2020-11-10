import React from "react";
import { withRouter } from "react-router-dom";
import "../styles/Listah.css";
import  Menu1  from "../components/Menu1";

const Listah = (props) => {
  const { history } = props;
  return (
    <div className="Listah">
      <Menu1/>
      <body>
        <div className="botones">
          <center>
            <h1>Hoteles</h1>
            <div className="btn-group-vertical py-5">
              <button
                type="button"
                class="btn btn-secondary"
                onClick={() => history.push("/Hotel")}
              >
                *Hotel brisas de Guatapé
              </button>
              <button type="button" class="btn btn-secondary">
                *Hotel real Guatapé
              </button>
              <button type="button" class="btn btn-secondary">
                *Hotel Guatados
              </button>
              <button type="button" class="btn btn-secondary">
                *Hotel los recuerdos
              </button>
              <button type="button" class="btn btn-secondary">
                *Hotel el castillo
              </button>
            </div>
          </center>
        </div>
        <center>
        <div>
          <button className="Back btn" onClick={() => history.goBack("/")}>
            <img
              className="mr-3"
              src="./imgs/Iconatras.png"
              width="100"
              height="60"
              alt="Logo"
              loading="lazy"
            />
          </button>
         
          <span>
            <button className="Back btn" onClick={() => history.push("/Listar")}>
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
export default withRouter(Listah);
