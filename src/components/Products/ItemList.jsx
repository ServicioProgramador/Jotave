import React from "react";
import Item from "./Item";




export default function ItemList({data}) {

  return (
    <div className="container mt-5">
      <div className=" d-flex g-3 row">
        {data.map((item) => {          
          return (
            <Item
              key={item.id}
              id={item.id}
              price={item.price}
              title={item.title}
              img={item.img}  
              category={item.category}            
              stock={item.stock}
            />
          );
        })}       
      </div>
    </div>
    
    
  );
}