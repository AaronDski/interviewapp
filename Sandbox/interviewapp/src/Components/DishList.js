import React from "react";

function DishList({ dishArr }) {
  return (
    <div>
      {dishArr.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </div>
  );
}

export default DishList;
