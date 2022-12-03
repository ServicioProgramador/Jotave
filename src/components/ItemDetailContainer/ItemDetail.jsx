import React from "react";
import "./ItemDetail.css"
import {Link} from "react-router-dom"

function ItemDetail({data} ) {
  return (
    <>
    <main>
    <div className="card">
      <div className="card__title">
        <div className="icon">
          <Link to="#"><i className="fa fa-arrow-left"></i></Link>
        </div>
        <h3>{data.marca} </h3>
      </div>
      <div className="card__body">
        <div className="half">
          <div className="featured_text">
            <h1>{data.title} </h1>
            <p className="sub">{data.marca}</p>
            <p className="price"></p>
          </div>
          <div className="image">
            <img src={data.img} alt={data.title}></img>
          </div>
        </div>
        <div className="half">
          <div className="description">
            <p>{data.detail}</p>
          </div>
          <span className="stock"><i className="fa fa-pen"></i>En Stock</span>
          <div className="reviews">
            <ul className="stars">
              <li><i className="fa fa-star"></i></li>
              <li><i className="fa fa-star"></i></li>
              <li><i className="fa fa-star"></i></li>
              <li><i className="fa fa-star"></i></li>
              <li><i className="fa fa-star-o"></i></li>
            </ul>
            <span>(64 reviews)</span>
          </div>
        </div>
      </div>
      <div className="card__footer">
        <div className="recommend">
          <p>Recomendado por</p>
          <h3>Jotave</h3>
        </div>
        <div className="action">
          <button type="button">Link a wsp</button>
        </div>
      </div>
    </div>
  </main>
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