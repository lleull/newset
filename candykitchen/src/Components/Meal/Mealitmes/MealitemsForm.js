import Input from '../../UI/Input'
import './mealfrom.css'
const MealitemForm =() => {

    return(
        <form className='display'>
              <Input label='Amount' input={{
                 min: '1',
                 max: '5',
                id: 'amount',
                type: 'number',
                step: '1',
                defaultValue: '1'
              }}/>
            <button>+ Add</button>
        </form>
    )

}

export default MealitemForm