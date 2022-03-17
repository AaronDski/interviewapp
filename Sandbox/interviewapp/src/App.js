import { useState } from "react";
import Form from "./Components/Form";
import DishList from "./Components/DishList";

import "./App.css";

function App() {
  const [dishName, setDishName] = useState("");
  const [dishArr, setDishArr] = useState([]);
  const [dishIngre, setDishIngre] = useState([]);
  const [dishFilter, setDishFilter] = useState(' ');
  const [dishFilteredArr, setDishFilteredArr] = useState([])

  return (
    <div className="App">
      <div>
        <h3>Dish Names</h3>
        <Form
          dishName={dishName}
          setDishName={setDishName}
          dishArr={dishArr}
          setDishArr={setDishArr}
          dishIngre={dishIngre}
          setDishIngre={setDishIngre}
          dishFilter={dishFilter}
          setDishFilter={setDishFilter}
          dishFilteredArr={dishFilteredArr}
          setDishFilteredArr={setDishFilteredArr}
        />
      </div>
      <div>
        <DishList 
        dishArr={dishArr} 
        setDishArr={setDishArr} 
        dishFilter={dishFilter}
        dishFilteredArr={dishFilteredArr}
        setDishFilteredArr={setDishFilteredArr}
        />
      </div>
    </div>
  );
}

export default App;
