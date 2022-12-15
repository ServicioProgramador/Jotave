import React from "react";
import "./ItemDetail.css"


function ItemDetail({data} ) {
  return (
    <>
    <div className="container card mt-5 d-flex p-1">
        <div className="row g-0">
          {/* imagen */}
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <img
              src={data.img}
              className="img-fluid rounded-start image"
              alt={data.title}
            ></img>
          </div>
          {/* info */}
          <div className="card-body col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <h5 className="card-title fs-1 text-uppercase">{data.title} </h5>
            <p className="card-text">{data.detail} </p>
          </div>
          <span className="stock p-2"><i className="fa fa-pen"> </i>En Stock</span>
        </div>
        <div className="d-flex mt-5 justify-content-around">
            <div className="recommend ">
              <p>Recomendado por</p>
              <h3>Jotave</h3>
            </div>
            <div className="action">
              <button type="button">Link a wsp</button>
            </div>
          </div>
      
      </div>
    </>
  );
}

export default ItemDetail;




/* <div classNameName="container div-card card mt-3">
      <div classNameName="row g-0">
        <div classNameName="col-md-4">
          <img
            src={data.img}
            classNameName="img-fluid rounded-start mt-3"
            alt="card img"
          ></img>
        </div>
        <div classNameName="col-md-8">
          <div classNameName="card-body ">
            <h3 classNameName="card-tittle text-center">{data.title}</h3>
            <p classNameName="card-text text-center">{data.detail} </p>            
            <p classNameName="text-center">Stock disponible!</p> 
            <p classNameName="text-center">Lo Quiero link wsp</p>
          </div>
        </div>
      </div>
    </div> */