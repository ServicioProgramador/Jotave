import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

export default function Item(props) {


  let { title, img, detail, id, category } = props;

  const urlDetalle = `/detail/ ${id}`

  return (
    <div className="card-count ">
      <div className="card-img">
        <img src={img} alt="" />
      </div>
      <div className="card-detail">
        <h3>{title} </h3>        
        <h4>{detail} </h4>
        <p>{category} </p>
        <p>Consultar stock</p>
        <Link to={urlDetalle} ><h4 className="btn bg-danger">+ Info</h4></Link>
      </div>
    </div>
  );
}
