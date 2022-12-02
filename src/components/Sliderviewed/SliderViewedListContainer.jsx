import React, { useEffect, useState } from "react";
import getItemsSliderDos from "../../services/MockViewed";
import SliderViewedList from "./SliderViewedList";

function SliderViewedListContainer() {
  let [data, setData] = useState([]);

  useEffect(() => {
    getItemsSliderDos().then((respuestaDatos) => setData(respuestaDatos));
  }, []);

  return (
    <div>
      <div className="row">
        <span></span>
        <div>
          <SliderViewedList data={data} />
        </div>
      </div>
    </div>
  );
}

export default SliderViewedListContainer;
