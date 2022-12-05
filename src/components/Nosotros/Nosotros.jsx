import React from 'react';
import './Nosotros.css';
import televisor from '../../assets/tv.jpg'

const Nosotros = () => {
   return(
        <div className='container  p-5 text-center'>
    <div className='container mt-5'>
            <img src={televisor} alt="" width="400px" height="400px" />
    </div>
         <div className='container'>
           <div className='row vh-100 pt-5 justify-content-center align-item-center '>
            <h2>Sobre Nosotros</h2>
             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est quas error at nostrum accusantium adipisci assumenda distinctio placeat facere tenetur sequi veniam deleniti ut aliquam, esse iusto voluptatum dolorum consequatur!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad numquam facere ratione culpa officiis at alias in quo rerum? Vitae ut quaerat magnam debitis totam ipsum, alias animi laudantium a?
             </p>
           
           
           <div className='text-center m-5'>
          
          
             <button>Seguinos <i class="bi bi-arrow-right-circle-fill"></i></button>
          
              <a href="" className="me-4 link-secondary"></a>
          
               <i className="bi bi-instagram"></i>
               <a href="" className="me-4 link-secondary"></a>
          
               <i className="bi bi-whatsapp"></i>
               <a href="" className="me-4 link-secondary"></a>
          
          
             </div> 
                 
             </div>
         </div>
      </div>
  ) 
}

export { Nosotros }