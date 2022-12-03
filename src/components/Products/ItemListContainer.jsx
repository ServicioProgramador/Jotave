import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import getItems, { getItemsByCategory } from "../../services/MockAPI";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  let [data, setData] = useState([]);

  const { cat } = useParams();

  useEffect(() => {
    if (cat === undefined) {
      getItems().then((respuestaDatos) => setData(respuestaDatos));
    } else {
      getItemsByCategory(cat).then((respuestaDatos) => setData(respuestaDatos));
    }
  }, [cat]);

  return (
    <div>
      <div className="row">

        <span>
          <h2 className="text-center mt-3"></h2>
        </span>

        <span></span>
        <div>
          <ItemList data={data} />
        </div>
      </div>
    </div>
  );
}

export default ItemListContainer;
