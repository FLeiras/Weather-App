import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav.js";
import Cards from "./components/Cards.jsx";
import API_KEY from "./env";
import { Route } from "react-router-dom";
import About from "./components/About";
import Ciudad from "./components/Ciudad";
import Inicio from "./components/Inicio";
/* import { Link } from "react-router-dom"; */

function App() {
  const [cities, setCities] = useState([]);
  function onSearch(ciudad) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setCities((oldCities) => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter((c) => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }
  return (
    <div className="app">
      <div className="bkg" />
      <div className="cuadro">
        <Route exact path="/app" render={() => <Nav onSearch={onSearch} />} />
        <div className="bnbda">
          <Route exact path="/">
            <Inicio />
          </Route>
        </div>
        <Route path="/about" component={About} />

        <Route
          exact
          path="/app"
          render={() => <Cards cities={cities} onClose={onClose} />}
        ></Route>

        <Route
          path="/ciudad/:ciudadId"
          render={({ match }) => (
            <Ciudad city={onFilter(match.params.ciudadId)} />
          )}
        ></Route>
      </div>
    </div>
  );
}

export default App;
