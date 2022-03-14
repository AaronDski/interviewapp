import React from "react";

function Form({dishName, setDishName, dishArr, setDishArr}) {
    return(
        <div>
            <form>
                <input 
                type='text' 
                placeholder="Enter Dish Name Here..." />
                <button type="submit" >Add</button>


            </form>

        </div>
    )
        
    
}

export default Form;