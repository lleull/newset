import Card from '../UI/Cart'
import MealItem from './Mealitmes/Mealitems'
import './AvalialbleMeals.css'
const Dummy = [
    {
        id:'m1',
        name: 'sushi',
        description: 'Finest fish and Vegetable',
        price: '22.99'

    },
    
    {
        id:'m2',
        name: 'Schnitzel',
        description: 'A germen special',
        price: '11.99',
    },
    {
        id:'m3',
        name: 'Burger',
        description: 'Meats and egg',
        price: '32.99'
    },
    {
        id:'m4',
        name: 'pizza',
        description: 'Cheeze, tomtao and slice',
        price: '42.99'
    },

]

const AvailableMeals =() => {
    const Listmeals = Dummy.map((meal) => <MealItem key={meal.id} name={meal.name} price={meal.price} description={meal.description}/> )
  
    return(
        <div className="meals">
            <ul className='uls'>
            <Card>
                {Listmeals}
            </Card>
            </ul>
        </div>
    )

}

export default AvailableMeals