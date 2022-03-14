import React from "react";
import { v4 as uuidv4 } from 'uuid';

function Form({dishName, setDishName, dishArr, setDishArr}) {

    const onInputChange = (e) => {
        setDishName(e.target.value);
    };

    const onFormSubmit = (e) => {
        e.preventDefault()
        setDishArr([...dishName, {id: uuidv4(), title: dishName }])
        setDishName("");
    };

    return(
        <div>
            <form onSubmit={onFormSubmit} >
                <input 
                type='text' 
                placeholder="Enter Dish Name Here..." 
                value={dishName}
                onChange={onInputChange}
                />
                <button type="submit" >Add</button>


            </form>

        </div>
    )
        
    
}

export default Form;