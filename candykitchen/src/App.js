import Header from './Components/Layout/Header';
import Meals from './Components/Meal/Meals';
import { useState } from 'react';
import './App.css'
import Cart from './Components/Cart/Cart';
function App() {
  const [CartisShown, setCartisShown] = useState(false)

  const showCart =() => {
    setCartisShown(true)
  }

  const hideCart =() => {
    setCartisShown(false)
  }
  return (
    <div className='App' >
      {CartisShown && <Cart onClose={hideCart}/>  }
      
      <Header setcart={showCart} />
     
     <main>
      <Meals/>
     </main>
  
    </div>
  );
}

export default App;
