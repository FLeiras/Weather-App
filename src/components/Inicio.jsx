import React from "react";
import { Link } from "react-router-dom";
import "./Inicio.css";

export default function Inicio() {
  return (
    <div className="msj">
      <h1>Bienvenido</h1>
      <h3>Esta App fue desarrollada con con propositos educativos</h3>
      <Link to="/app">
        <h2>Weather App</h2>
      </Link>
    </div>
  );
}
