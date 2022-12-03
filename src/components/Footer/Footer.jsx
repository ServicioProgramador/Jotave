
import React from 'react';

const Footer = () => {
   return(
    <footer className="text-center text-lg-start bg-white text-muted">
 
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    
    <div className="container text-center text-md-start mt-5">
      <p>Comunicate con nosotros a traves de nuestras redes:</p>
    </div>
  
    <div className='container text-center text-md-start mt-5'>

   <a href="" className="me-4 link-secondary"></a>
        
   <i className="bi bi-instagram"></i>
   <a href="" className="me-4 link-secondary"></a>
    
   <i className="bi bi-whatsapp"></i>
   <a href="" className="me-4 link-secondary"></a>
    
 
    </div> 
    </section>
 

 
  <section className="">
    <div className="container text-center text-md-start mt-5">
   
      <div className="row mt-3">
    
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        
          <h6 className="text-uppercase fw-bold mb-4">
          <i className="bi bi-gem"></i>Jotave
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
     
      
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
          <p><i className="bi bi-house me-3 text-secondary"></i>BsAs, Argentina</p>
          <p>
            <i className="bi bi-envelope me-3 text-secondary"></i>
            info@example.com
          </p>
          <p><i className="bi bi-phone me-3 text-secondary"></i> + 54 9 2344 67 88</p>
          <p><i className="bi bi-phone me-3 text-secondary"></i> + 54 9 2345  67 89</p>
        </div>
        
      </div>
      
    </div>
  </section>

  <div className="text-center p-4">
   &copy; {new Date().getFullYear()} Copyright Desarrollado por WindeckerWebs
  </div>

</footer>

  ) 
}

export { Footer }

