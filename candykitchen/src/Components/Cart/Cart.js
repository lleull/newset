import React from 'react'
import Modal from '../UI/Modal'
import './cart.css'
const Cart = (props) => {
    const CartItems = <ul className='cart-items'> { [
        {id: 'c1', name:'sushi', amount:'2',  price:'$12.99'}
    ].map((item) => <li>{ item.name }</li>)}</ul>
  return (
    <Modal onClose={props.onClose}>
     {CartItems}
      <div className='total'>
        <span>Total amount</span>
        <span>$ 34.64</span>
        </div>
      <div className='actions'>
        <button onClick={props.onClose} className='button--alt'>Close</button>
        <button className='button'>Order</button>
      </div>
    </Modal>
  )
}

export default Cart
