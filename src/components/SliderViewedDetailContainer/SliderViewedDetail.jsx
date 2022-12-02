import React from "react";
import "./SliderViewedDetail.css";
import { Link } from "react-router-dom";

function SliderViewedDetail({ data }) {
  console.log("hola data", data);
  return (
    <>
      <main>
        <div className="card">
          <div className="card__title">
            <div className="icon">
              <Link to="#">
                <i className="fa fa-arrow-left"></i>
              </Link>
            </div>
            <h3> </h3>
          </div>
          <div className="card__body">
            <div className="half">
              <div className="featured_text">
                <h1>{data.title} </h1>

                <h3 className="sub">{data.marca} </h3>
                <p className="price"></p>
              </div>
              <div className="image">
                <img src={data.img} alt={data.title}></img>
              </div>
            </div>
            <div className="half">
              <div className="description">
                <p>{data.detail} </p>
              </div>
              <span className="stock">
                <i className="fa fa-pen"></i>En Stock
              </span>
              <div className="reviews">
                <ul className="stars">
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star-o"></i>
                  </li>
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

export default SliderViewedDetail;
