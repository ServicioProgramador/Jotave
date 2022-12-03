import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

 
function NavBar() {

  return (
    <>
 <nav className="navbar navbar-light bg-light fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
    <img src="https://i.ibb.co/bvM0jYg/Logo-Blanco.png" alt="" className="logoNavbar"/>
    </a>
    <button className="navbar-toggler"  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span><i className="bi bi-list-nested"></i> </span>
    
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menú</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/nosotros">Nosotros</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            
              Productos
            </a>

             <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
               <li><Link className="dropdown-item" to="/todos"> Todos</Link></li>
               <li className="dropdown-divider"></li>
                <li><Link className="dropdown-item" to="/categoria/tv, audio y video"><span>Tv, Audio y Video</span><i className="bi bi-caret-down-fill"></i></Link></li>
                <li><Link className="dropdown-item" to="/categoria/climatizacion"><span>Climatización</span><i className="bi bi-caret-down-fill"></i></Link></li>
                <li><Link className="dropdown-item" to="/categoria/heladeras y freezer"><span>Heladeras  y Freezer</span><i className="bi bi-caret-down-fill"></i></Link></li>
              <li><Link className="dropdown-item" to="/categoria/terrmotanques"><span>Termotanques y Calefones</span></Link></li>
                <li><Link className="dropdown-item" to="/categoria/cocinas y hornos"><span>Cocinas y Hornos</span><i className="bi bi-caret-down-fill"></i></Link></li>
                <li><Link className="dropdown-item" to="/categoria/pequeños hogar"><span>Pequeños Hogar</span><i className="bi bi-caret-down-fill"></i></Link></li>
                <li><Link className="dropdown-item" to="/categoria/pequeños cocina"><span>Pequeño Cocina</span><i className="bi bi-caret-down-fill"></i></Link></li>
             <li><Link className="dropdown-item" to="/categoria/cuidado personal"><span>Cuidado personal</span></Link></li>
                <li><Link className="dropdown-item" to="/categoria/informatica"><span>Informática</span><i className="bi bi-caret-down-fill"></i></Link></li>
                <li><Link className="dropdown-item" to="/categoria/jardin"><span>Jardín</span><i className="bi bi-caret-down-fill"></i></Link></li>
        
             </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>

        
  

    </>    
  );
}

export default NavBar;