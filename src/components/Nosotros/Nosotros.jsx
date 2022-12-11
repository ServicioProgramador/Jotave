import React from "react";
import { Link } from "react-router-dom";
import "./Nosotros.css";

const Nosotros = () => {
  return (
    <div className="container  p-5 text-center">
      <Link>
        <img
          src="https://i.ibb.co/6H8bgWf/IMG-20221206-WA0028.jpg"
          alt=""
          width="700px"
          height="300px"
        />
      </Link>
      <div className="container">
        <div className="row vh-100 pt-5 justify-content-center align-item-center ">
          <h1>Sobre Nosotros</h1>
          <h2>Bienvenido a Grupo Jotave</h2>
          <p>
            Somos una empresa que se dedica exclusivamente a la venta
            financianda de electrodómesticos. Desde hace 5 años nos encontramos
            en el mercado. Abastecemos y abarcamos la logística de distribución
            de más de 50 localidades de la provincia de Buenos Aires.
          </p>

          <div className="text-center m-5">
            <button>
              Seguinos <i className="bi bi-arrow-right-circle-fill"></i>
            </button>

            {/* <a href="" className="me-4 link-secondary"></a>
          
               <i className="bi bi-instagram"></i>
               <a href="" className="me-4 link-secondary"></a>
          
               <i className="bi bi-whatsapp"></i>
               <a href="" className="me-4 link-secondary"></a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Nosotros };
