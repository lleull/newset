import React from "react"
import './Meals.css'
import MealitemForm from "./MealitemsForm"
const MealItem = (props) =>{

 
    return(

<li className="meals">
<div>
            <h3>{props.name}</h3>
            <div className="description">{props.description}</div>
            </div>
            <div className="price">${props.price}</div>
            <div className="Addmeal">
               <MealitemForm/>
            </div>
       
        </li>
        
    
    )

}

export default MealItem