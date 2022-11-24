import React from "react";
import "./NavBar.css";


function NavBar() {


  return (
    <>
      <nav className="navbar  navbar-expand-lg navbar-light nav-stile ">
        <div className="container-fluid ">
          <a className="navbar-brand fw-bold ms-4" href="/">
            <img src="" alt="" />
            <h1>Jotave</h1>
          </a>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto me-4">
              <a className="navbar-brand ms-4" href="/">
                Inicio
              </a>
              <li className="nav-item">
                <a href="/" className="nav-link fw-bold" aria-current="page">
                  Nosotros
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle fw-bold"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Productos
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-item">
                    <a
                      href="/"
                      className="nav-link fw-bold"
                      aria-current="page"
                    >
                      Todos
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/"
                      className="nav-link fw-bold"
                      aria-current="page"
                    >
                      Imagen
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link fw-bold">
                      Informatica
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link fw-bold">
                      Audio
                    </a>
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
