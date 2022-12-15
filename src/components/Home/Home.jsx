import React from 'react';
import Carousel from '../Carousel/Carousel';
import Whatsap from '../Whatsap/Whatsap';
import SliderViewedListContainer from '../Sliderviewed/SliderViewedListContainer';
import ItemListContainer from '../Products/ItemListContainer';





const Home = () => {

   return(
        <div>
               <Carousel /> 
               <SliderViewedListContainer />
               <ItemListContainer />
               <Whatsap />
            </div>
  ) 
}


export { Home } 

 

