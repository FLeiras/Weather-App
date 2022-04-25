import React from "react";
import "./About.css";
import Imagen from "../Img/frontend2.jpg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="principal">
      <div className="titulo2">
        <h1>Sobre Mi</h1>
      </div>

      <div className="datos">
        <ul>
          <span>Nombre: Federico</span>
          <br />
          <br />
          <span>Apellido: Leiras</span>
          <br />
          <br />
          <span>Tecnologías Aplicadas:</span>
          <ul>React/React Router</ul>
          <ul>JS</ul>
          <ul>CSS</ul>
          <ul>HTML</ul>

          <span>
            Contacto:
            <ul>Email: fleiras18@gmail.com</ul>
            <ul>Tel: 11-66067670</ul>
            <ul>
              <a
                href="https://www.linkedin.com/in/fede-leiras"
                target="_blank"
                rel="noreferrer"
              >
                <h3>LinkeDin</h3>
              </a>
            </ul>
          </span>
        </ul>
      </div>
      <div className="imagen">
        <img src={Imagen} alt="Nada" />
      </div>
      <div>
        <Link to="/app">
          <span className="volver">Weather App</span>
        </Link>
      </div>
    </div>
  );
}
