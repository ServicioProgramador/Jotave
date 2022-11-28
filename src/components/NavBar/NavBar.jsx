import React from "react";
import "./NavBar.css";
import {Link} from "react-router-dom"
import Logo from "../Logo/Logo";


function NavBar() {


  return (
    <>
      <nav className="navbar  navbar-expand-lg navbar-light nav-stile ">
        <div className="container-fluid ">
          <Link className="navbar-brand fw-bold ms-4" to="/">
            <img src={Logo} alt="" />
            <h1>Jotave</h1>
          </Link>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto me-4">
              <Link className="navbar-brand ms-4" to="/">
                Inicio
              </Link>
              <li className="nav-item">
                <Link to="/" className="nav-link fw-bold" aria-current="page">
                  Nosotros
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle fw-bold"
                  to="/productos"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Productos
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-item">
                    <Link
                      to="/todos"
                      className="nav-link fw-bold"
                      aria-current="page"
                    >
                      Todos
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/categoria/imagen"
                      className="nav-link fw-bold"
                      aria-current="page"
                    >
                      Imagen
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/categoria/informatica" className="nav-link fw-bold">
                      Informatica
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/categoria/audio" className="nav-link fw-bold">
                      Audio
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>          
        </div>             
      </nav>      
    </>
  );
}

export default NavBar;
