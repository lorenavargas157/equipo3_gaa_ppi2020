import React from "react";
import { withRouter } from "react-router-dom";
import "../styles/Listah.css";
import  Menu1  from "../components/Menu1";


const Listar = (props) => {
  const { history } = props;
  return (
    <div className="Lista">
      <Menu1/>
      <body>
        <div className="botones">
          <center>
            <h1>Restaurantes</h1>
            <div className="btn-group-vertical py-5">
              <button
                type="button"
                class="btn btn-secondary"
                onClick={() => history.push("/Restaurante")}
              >
              *la fogata
              </button>
              <br />
              <button type="button" class="btn btn-secondary">
              *Restaurantes bar la piedra
              </button>
              <br />
              <button type="button" class="btn btn-secondary">
                *La cumparcita
              </button>
              <br />
              <button type="button" class="btn btn-secondary">
                *Restaurantes stone
              </button>
              <br />
              <button type="button" class="btn btn-secondary">
                *Casa cuba
              </button>
            </div>
          </center>
        </div>
        <center>
        <div className="flechas">
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
export default withRouter(Listar);
