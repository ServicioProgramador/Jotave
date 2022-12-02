import React from "react";
/* import "./Slider.css"; */
import { Link } from "react-router-dom";


export default function Slider(props) {
  let { title, img, detail, id, category } = props;

  const urlDetalle = `/SliderDetail/ ${id}-${title}`;

  return (
    
    <div className="card-count ">
      <div className="card-img">
        <img src={img} alt={title} />
      </div>
      <div className="card-detail">
        <h4>{title} </h4>
        <p>{detail} </p>
        <p>{category} </p>
        <p>Consultar stock</p>
        <Link to={urlDetalle}>
          <button className="button_info">+ Info</button>
        </Link>
      </div>
    </div>
  );
}

 
