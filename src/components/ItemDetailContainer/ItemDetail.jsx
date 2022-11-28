import React from "react";
import "./ItemDetail.css"

function ItemDetail({data} ) {
  return (
    <div className="container div-card card mt-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={data.img}
            className="img-fluid rounded-start mt-3"
            alt="card img"
          ></img>
        </div>
        <div className="col-md-8">
          <div className="card-body ">
            <h3 className="card-tittle text-center">{data.title}</h3>
            <p className="card-text text-center">{data.detail} </p>            
            <p className="text-center">Stock disponible!</p> 
            <p className="text-center">Lo Quiero link wsp</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
