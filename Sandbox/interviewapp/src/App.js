// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [dishName, setDishName] = useState('')
  const [dishArr, setDishArr] = useState([]);

  function addName (e){
    e.preventDefault()
    setDishName(e.target.value)
    setDishArr([...dishArr, dishName]);
    console.log(dishName)

  }

  function displayNames(){
    return ( 
    dishArr.map((item) => (
        <p>{item}</p>
        // console.log(item)
     ))
    )
}



  return (
    <div className="App">
      <h3>Dish Name</h3>
      {/* <textarea></textarea> */}
      <form onSubmit={addName} >
            <input
                style={{width: "300px"}}
                type="text"
                placeholder="Enter Dish Name"
                value={dishName}
                onChange={addName}
            />
            <button onClick={addName} type="button" >Add Dish</button>
        </form>

        <div>
          {displayNames}
        </div>
    </div>
  );
}

export default App;
