import {useState} from 'react';
import Form from './Components/Form';
import DishList from './Components/DishList';

import './App.css';

function App() {
  const [dishName, setDishName] = useState('')
  const [dishArr, setDishArr] = useState([]);

  
  return (
    <div className="App">
      <div>
        <h3>Dish Name</h3>
        <Form 
        dishName = {dishName}
        setDishName = {setDishName}
        dishArr={dishArr} 
        setDishArr={setDishArr} />
      </div>
        <div>
          <DishList 
          dishName ={dishName} 
          dishArr ={dishArr} />
        </div>
    </div>
  );
}

export default App;
