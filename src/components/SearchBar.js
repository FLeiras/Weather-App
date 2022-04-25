import React, { useState } from "react";
import "./Search.css";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (
    <form
      className="btnBuscar"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
        setCity("");
      }}
    >
      <input
        className="buscador"
        autoComplete="off"
        type="text"
        placeholder="Agregar una Ciudad..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <input className="btnSearch" type="submit" value="+" />
    </form>
  );
}
