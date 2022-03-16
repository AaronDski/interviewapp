import { useState } from "react";
import Form from "./Components/Form";
import DishList from "./Components/DishList";

import "./App.css";

function App() {
  const [dishName, setDishName] = useState("");
  const [dishArr, setDishArr] = useState([]);
  const [dishIngre, setDishIngre] = useState([]);
  const [dishFilter, setDishFilter] = useState([]);

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
        />
      </div>
      <div>
        <DishList 
        dishArr={dishArr} 
        setDishArr={setDishArr} 
        />
      </div>
    </div>
  );
}

export default App;
