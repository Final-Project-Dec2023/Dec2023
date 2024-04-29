import React from 'react'
import order from '../assets/images/order.png' 
import '../css/Chart.css'

const CartEmpty = () => {
  return (
    <div className='cart-container'>
      <>
      <div className='cart'>
        <img src ={order}/>
      </div>
      <div className="Empty">
        <h2>Your Cart is Empty</h2>
        <p>Browse all categories and discover our new arrival</p>
      </div>
      <div className='button'>
      <button className='button2'>Start Shopping</button>
      </div>
      </>
    </div>
  )
}

export default CartEmpty