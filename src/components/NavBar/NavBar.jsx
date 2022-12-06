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
    <form className=" mx-auto mt-10">
      
      <input className="form-row mt-sm-2 p-1"  type="search" placeholder="Buscar"></input>
      <button className="btn btn-outline-light my-sm-o" type="submit"><i className="bi bi-search"></i></button>
    
  </form>
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
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toogle" to="/categoria/Smarts, audio y video" data-bs-toggle="dropdown" aria-expanded="false"><span> Smarts, Audio, Video &raquo;</span>
                   </Link>
                  <ul className="dropdown-menu submenu">
                    <li><Link className="dropdown-item" to="/categoria/tv"><span>Smarts</span><i className="bi bi-caret-down-fill"></i></Link></li>
                    <li><Link className="dropdown-item" to="/categoria/Audio"><span>
                      Audio</span><i className="bi bi-caret-down-fill"></i></Link></li>
                    <li><Link className="dropdown-item" to="/categoria/Video"><span>
                      Video</span><i className="bi bi-caret-down-fill"></i></Link></li>   
                  </ul>
                   </li>

                  <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toogle" to="/categoria/climatizacion" data-bs-toggle="dropdown" aria-expanded="false"><span> Climatización &raquo;</span>
                  </Link>

                  <ul className="dropdown-menu submenu">
                  <li><Link className="dropdown-item" to="/categoria/aire"><span>Aire Acondicionado</span><i className="bi bi-caret-down-fill"></i></Link></li>
                    <li><Link className="dropdown-item" to="/categoria/ventilacion"><span>
                      Ventiladores</span><i className="bi bi-caret-down-fill"></i></Link></li>
                    <li><Link className="dropdown-item" to="/categoria/calefaccion"><span>Calefactores
                      </span><i className="bi bi-caret-down-fill"></i></Link></li>

                  </ul>
                  </li>
                <li><Link className="dropdown-item" to="/categoria/heladeras y freezer"><span>Heladeras  y Freezer</span><i className="bi bi-caret-down-fill"></i></Link></li>
              <li><Link className="dropdown-item" to="/categoria/terrmotanques"><span>Termotanques y Calefones</span></Link></li>
                <li><Link className="dropdown-item" to="/categoria/cocinas y hornos"><span>Cocinas y Hornos</span><i className="bi bi-caret-down-fill"></i></Link></li>
                <li><Link className="dropdown-item" to="/categoria/pequeños hogar"><span>Pequeños Hogar</span><i className="bi bi-caret-down-fill"></i></Link></li>
                <li><Link className="dropdown-item" to="/categoria/pequeños cocina"><span>Pequeños Cocina</span><i className="bi bi-caret-down-fill"></i></Link></li>
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

export { NavBar};