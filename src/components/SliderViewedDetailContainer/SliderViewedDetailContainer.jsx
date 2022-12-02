import React, { useState, useEffect } from "react";
import SliderViewedDetail from "./SliderViewedDetail";
import { useParams } from "react-router-dom";
import { getItemsSingleSliderDos } from "../../services/MockViewed";

function SliderViewedDetailContainer() {
    let [data, setData] = useState({});



    const { id } = useParams();
  

    useEffect(() => {
      getItemsSingleSliderDos(id).then((respuestaDatos) => {
        setData(respuestaDatos);
      });
    }, [id]);

  return (
    <div>
      <SliderViewedDetail data={data}/>
    </div>
  );
}

export default SliderViewedDetailContainer;