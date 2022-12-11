import React from 'react';
import Carousel from '../Carousel/Carousel';
import { NavBar } from '../NavBar/NavBar';
import Whatsap from '../Whatsap/Whatsap';
import { Footer } from '../Footer/Footer'
import SliderViewedListContainer from '../Sliderviewed/SliderViewedListContainer';
import ItemListContainer from '../Products/ItemListContainer';

const Home = () => {
   return(
        <div>
               <NavBar />
               <Carousel /> 
               <SliderViewedListContainer />
               <ItemListContainer />
               <Whatsap />
               <Footer />
            </div>
  ) 
}

export { Home } 