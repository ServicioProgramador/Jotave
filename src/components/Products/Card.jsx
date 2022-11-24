import React from "react";
import "./Card.css";

export default function Card(props) {
  let { title, img, detail, price } = props;
  return (
    <div className="card-count ">
      <div className="card-img">
        <img src={img} alt="" />
      </div>
      <div className="card-detail">
        <h3>{title} </h3>
        <p>{price} </p>
        <h4>{detail} </h4>
        <p>Stock disponible:</p>
        <h4 className="btn bg-danger">+ Info</h4>
      </div>
    </div>
  );
}
