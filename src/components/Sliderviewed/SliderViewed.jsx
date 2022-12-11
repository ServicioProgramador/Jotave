import React from "react";
import "./SliderViewed.css";
import { Link } from "react-router-dom";

export default function SliderViewed(props) {
  let { title, img, detail, id } = props;

  const urlDetalle = `/SliderViewedDetail/ ${id}-${title}`;

  return (
    <div className="card-count ">
      <div className="card-img">
        <img src={img} alt={title} />
      </div>
      <div className="card-detail ">
        <h4 className="card-title mt-5 text-uppercase">{title} </h4>
        <p>{detail} </p>
        <Link  to={urlDetalle}>
          <button className="button_info mt-5">+ Info</button>
        </Link>
      </div>
    </div>
  );
}
