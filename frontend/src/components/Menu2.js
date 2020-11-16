import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Navbar, Nav,  } from "react-bootstrap";
import "../styles/Menu1.css";

export const Menu2 = () => {
  return (
    <div classname="Bienvenida">
      <Navbar bg="" expand="lg">
        <Navbar.Brand href="#home">Look up guatape</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/">Inicio</Link>
            <Link to="/Listah1">Hoteles</Link>
            <Link to="/Listar1">Restaurantes</Link>
            <Link to="/Listas1">Sitio de interes</Link>
            <Link to="/calificar">Calificacion</Link>
            <Link to="/Contacto">Contacto</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <br />
    </div>
  );
};

export default withRouter(Menu2);
