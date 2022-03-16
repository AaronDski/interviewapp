import React from "react";
import { v4 as uuidv4 } from "uuid";

function Form({ dishName, setDishName, dishArr, setDishArr, dishIngre, setDishIngre, dishFilter, setDishFilter }) {
  const onInputChange = (e) => {
    setDishName(e.target.value);
    // console.log(dishName);
  };

  const onIngreChange = (e) => {
    setDishIngre(e.target.value);
    // console.log(dishName);
  };

  const onFilterChange = (e) => {
    setDishFilter(e.target.value);
    // console.log(dishName);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setDishArr([...dishArr, { id: uuidv4(), title: dishName, ingreList: dishIngre.split(' ') }]);
    setDishName("");
    setDishIngre("");
    console.log(dishArr);
    console.log(dishIngre)
  };

  const filterList = (e) => {
      e.preventDefault();
      setDishFilter(dishArr.filter((dish) => dish.ingreList === dishFilter))
    //   setDishArr(dishArr.filter((dish) => dish.id !== id));

  }


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
        <input
          type="text"
          placeholder="Enter Dish Ingredents Here..."
          value={dishIngre}
          required
          onChange={onIngreChange}
        />
        
        <button type="submit">Add</button>
      </form>

      <form onSubmit={filterList}>
      <input
          type="text"
          placeholder="Enter Dish Ingredents Here..."
          value={dishFilter}
          required
          onChange={onFilterChange}
        />
      </form>
      <button type="submit">Filter List</button>
    </div>
  );
}

export default Form;
