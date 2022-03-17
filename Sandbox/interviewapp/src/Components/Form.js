import React from "react";
import { v4 as uuidv4 } from "uuid";

function Form({ dishName, setDishName, dishArr, setDishArr, dishIngre, setDishIngre, dishFilter, setDishFilter, dishFilteredArr, setDishFilteredArr }) {
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
    // setDishFilteredArr([...dishArr.filter((dish) => dish.ingreList.includes(dishFilter)) ])

    // console.log(dishFilteredArr);
  };

  const onFilterSubmit = (e) => {
      e.preventDefault()
    // setDishFilter(e.target.value);
    setDishFilteredArr([...dishArr.filter((dish) => dish.ingreList.includes(dishFilter)) ])
    console.log(dishFilteredArr);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setDishArr([...dishArr, { id: uuidv4(), title: dishName, ingreList: dishIngre.split(' ') }]);
    setDishName("");
    setDishIngre("");
    console.log(dishArr);
    console.log(dishIngre)
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
        <br></br>
        <input
          type="text"
          placeholder="Enter Dish Ingredents Here..."
          value={dishIngre}
          required
          onChange={onIngreChange}
        />
        
        <button type="submit">Add</button>
      </form>
        <br></br>
      <form onSubmit={onFilterSubmit}>
      <input
          type="text"
          placeholder="Search Ingredents"
          value={dishFilter}
          required
          onChange={onFilterChange}
        />
        <button type="submit">filter </button>

      </form>
    </div>
  );
}

export default Form;
