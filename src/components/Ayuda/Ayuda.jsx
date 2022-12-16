import React from 'react';
import './Ayuda.css'
import { motion } from 'framer-motion'
const Ayuda = () => {

  
   return(

            <>
            <div className='container d-flex justify-content-center'>
                <motion.h2    
                 animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "20%", "20%", "0%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1
      }} 
                className='h2'>Preguntas Frecuentes</motion.h2>
            </div>
        <div className='container d-flex justify-content-center text-center' >
<div className='row align-items-start ' >
    <div className='col-12'>
        
       <div className='parrafo'>
                          <p>
                           
                           <i className="bi bi-question-circle-fill"></i>
                          Si estoy en el Veraz puedo acceder igual a los productos ? 
                           <p>
                           <i className="bi bi-arrow-right-circle-fill"></i>
                            Si podes acceder igualmente a nuestros productos 
                           </p>
                          </p> 
         
         
                          <p>
                                 
                          <i className="bi bi-question-circle-fill"></i>

                           Qué requisitos debo presentar en el momento de la entrega ?
                           <p>
                           <i className="bi bi-arrow-right-circle-fill"></i>

                                  Fotocopias:
                                  <br />
                                  * Dni , 
                                  *recibo de sueldo,
                                  *servicio a nombre a tu nombre ,
                                  *contrato de alquiler.
                           </p>
                               </p>
                              <p>
                          <i className="bi bi-question-circle-fill"></i>
                              En qué momento abono la primera cuota ? 
                              <p>
                              <i className="bi bi-arrow-right-circle-fill"></i>

                               En el mismo momento de la entrega! 
                              </p>
                              </p>
        
                                          
            <p>
            <i className="bi bi-question-circle-fill"></i>
             
             Los productos tienen garantía ? 
             <p>
             <i className="bi bi-arrow-right-circle-fill"></i>

                 Si , dependiendo el producto entre 6 a 12 meses 
             </p>
            </p>
            <p>                               
            <i className="bi bi-question-circle-fill"></i>
        
                Cómo es el sistema de pagos ?
                <p>
                <i className="bi bi-arrow-right-circle-fill"></i>

                Mensualmente abonando por transferencia , Mercado pago o  efectivo!
                </p>
        
            </p>
        </div>
       </div>

</div>
    <div className='row align-items-center'>
        <div className=''>
        <img src='https://i.ibb.co/9pyC9mM/preguntas.jpg' alt='logo' className='img'></img>

        </div>
    
    </div>
</div>
         



        </>
  ) 
}

export { Ayuda }