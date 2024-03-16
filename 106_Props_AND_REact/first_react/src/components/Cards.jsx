import React from "react";
import "./Cards.css"

const Cards = (props) => {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};

export default Cards;
 