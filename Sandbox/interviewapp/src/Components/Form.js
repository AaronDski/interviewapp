import React from "react";
import { v4 as uuidv4 } from "uuid";

function Form({ dishName, setDishName, dishArr, setDishArr }) {
  const onInputChange = (e) => {
    setDishName(e.target.value);
    // console.log(dishName);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setDishArr([...dishArr, { id: uuidv4(), title: dishName }]);
    setDishName("");
    console.log(dishArr);
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Enter Dish Name Here..."
          value={dishName}
          required
          onChange={onInputChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Form;
