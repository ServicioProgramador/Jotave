import React, { useState, useEffect } from "react";
import SliderDetail from "./SliderDetail";
import { useParams } from "react-router-dom";
import { getItemsSingleSlider } from "../../services/MockOffer";

function SliderDetailContainer() {
    let [data, setData] = useState({});



    const { id } = useParams();
  

    useEffect(() => {
      getItemsSingleSlider(id).then((respuestaDatos) => {
        setData(respuestaDatos);
      });
    }, [id]);

  return (
    <div>
      <SliderDetail data={data}/>
    </div>
  );
}

export default SliderDetailContainer;