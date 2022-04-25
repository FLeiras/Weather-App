import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({ min, max, name, img, onClose, id }) {
  return (
    <div className="card">
      <div className="scll" />
      <div id="closeIcon" className="row">
        <button onClick={onClose} className="btnInput">
          X
        </button>
      </div>
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <Link to={`/ciudad/${id}`}>
          <div className="masInfo">
            <h6>+ Info</h6>
          </div>
        </Link>

        <div className="row">
          <div className="infoMin">
            <p>Min</p>
            <p>{min}°</p>
          </div>
          <div className="infoMax">
            <p>Max</p>
            <p>{max}°</p>
          </div>
          <div className="iconoClima">
            <img
              src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
              width="80"
              height="80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
