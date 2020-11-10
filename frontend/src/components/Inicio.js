import React from "react";
import { Link, withRouter } from "react-router-dom";

const Inicio = () => {
  return (
    <div>
      
      <div class="jumbotron">
        <div class="container">
          <center>
            {" "}
            <img
              className="mb-4"
              src="./imgs/logo.png"
              alt="Logo"
              width="182"
              height="182"
            />
          </center>
          <center>
            {" "}
            <h1 class="display-3">
              <font className="Leisy:)">
                <font className="Leisy:)">¡Bienvenido!</font>
              </font>
            </h1>
          </center>
          <center>
            {" "}
            <p>
              <font className="Leisy:)">
                <font className="Leisy:)">
                  Este aplicativo movil esta diseñado para ofrecer multiples y
                  diversas opciones de sitios y rincones a visitar de este
                  HERMOSO municipio "GUATAPE"{" "}
                </font>
              </font>
            </p>
          </center>
          <center>
            <p>
              <a class="btn btn-primary btn-lg" href="/" role="button">
                <font className="Leisy:)">
                  <font className="Leisy:)">SIGUIENTE</font>
                </font>
              </a>
            </p>
          </center>
        </div>
      </div>
      <center>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h2>
                <font className="Leisy:)">
                  <font className="Leisy:)">USUARIO </font>{" "}
                </font>
              </h2>
              <p>
                <img
                  className="mb-4"
                  src="./imgs/maleta.png"
                  alt="Logo"
                  width="182"
                  height="190"
                />
              </p>
              <p>
                <Link class="btn btn-secondary" to="/Registro" role="button">
                  <font className="Leisy:)">
                    <font className="Leisy:)">INICIAR</font>
                  </font>
                </Link>
              </p>
            </div>
            <div class="col-md-6">
              <h2>
                <font className="Leisy:)">
                  <font className="Leisy:)">SECRETARIA DE TURISMO</font>
                </font>
              </h2>
              <p>
                <img
                  className="mb-4"
                  src="./imgs/wtf.png"
                  alt="Logo"
                  width="182"
                  height="182"
                />
              </p>
              <p>
                <Link class="btn btn-secondary" to="/Registro1" role="button">
                  <font className="Leisy:)">
                    <font className="Leisy:)">INICIAR</font>
                  </font>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default withRouter(Inicio);