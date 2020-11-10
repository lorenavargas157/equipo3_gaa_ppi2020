import React from "react";
import { withRouter } from "react-router-dom";
import Menu1 from "../components/Menu1";
import  "../styles/contacto.css";

const Contacto = (props) => {
  const { history } = props;
  return (
    <center>
      <div>
        <Menu1 />
        <h1>Contacto</h1>
        <div class="card">
        <center>  <img src="./imgs/icon.jpg" class="card-img-top" alt="..." /></center>
          <div class="card-body">
            <p class="card-text">@look_guatape</p>
          </div>
        </div>
        <div class="card">
          <center><img src="./imgs/face.jpg" class="card-img-top" alt="..." /></center>
          <div class="card-body">
            <p class="card-text">@look up guatape</p>
          </div>
        </div>
        <button
          type="button"
          class="btn btn-secondary"
          onClick={() => history.push("/")}
        >
          Inicio
        </button>
      </div>
    </center>
  );
};
export default withRouter(Contacto);
