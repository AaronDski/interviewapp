// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [dishName, setDishName] = useState('')
  const [dishArr, setDishArr] = useState([]);

  // function nameSetter(e){
  //   setDishName(e.target.value)
  //   console.log(dishName)
  // }

  const hanldeChange = e => {
    setDishName(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  let displayArr = ([...dishArr, dishName]);
  console.log(displayArr)

  function addName (e){
    e.preventDefault()
    setDishArr([...dishArr, dishName]);
    console.log(dishArr)
    e.target.value = ''
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
                onChange={hanldeChange}            />
            <button  type="submit" >Add Dish</button>
        </form>

        <div>
          {displayNames}
        </div>
    </div>
  );
}

export default App;
