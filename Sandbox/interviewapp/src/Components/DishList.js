import React from "react";

function DishList({ dishArr, setDishArr }) {
    const handleDelete = ({id}) => {
        setDishArr(dishArr.filter((dish) => dish.id !== id));
    };

  return (
    <div>
      {dishArr.map((item) => (
        <li key={item.id}>Name:{item.title} 
        <br></br>
        Ingredents: {item.ingreList}
        <div>
            <button onClick={() => handleDelete(item)}>x</button>
        </div>
        </li>
      ))}
      <div>
          
      </div>
    </div>
  );
}

export default DishList;
