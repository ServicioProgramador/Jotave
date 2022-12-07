import React from "react";
import Carousel from "../Carousel/Carousel";
import { NavBar } from "../NavBar/NavBar";

import Whatsap from "../Whatsap/Whatsap";

const Home = () => {

   return(
        <div>
               <NavBar />
               <Carousel /> 
               <Whatsap />
            </div>
  ) 
}

  return (
    <div>
      <NavBar />
      <Carousel />
      <Whatsap />
    </div>
  );
};


export { Home };
