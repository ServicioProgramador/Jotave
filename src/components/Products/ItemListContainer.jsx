import React, { useEffect, useState } from "react";
import Card from "./Card";
import getItems from "../../services/MockAPI";

function ItemListContainer(p) {
  let [data, setData] = useState([]);

  useEffect(() => {
    getItems().then((respuestaDatos) => {
      setData(respuestaDatos);
    });
  }, []);

  return (
    <div>
      <div className="row">
        {data.map((item) => {
          return (
            <Card
              price={item.price}
              title={item.title}
              img={item.img}
              detail={item.detail}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ItemListContainer;
