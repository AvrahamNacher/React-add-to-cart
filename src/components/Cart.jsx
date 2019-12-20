import React from 'react'
import Product from './Product'
import CartItem from './CartItem'

import './Cart.css'

function Cart(props) {
    console.log("cart = ");
    console.log(props.cart);
    return (
        <div>
            <div className="main-text">Review Your Products</div>

        <div className="cart-section">
            {props.cart.map( (el) => <CartItem key={el.item.id} itemInfo={el} newItem={props.newItem}/> )}
        </div>
        </div>
    )
}

export default Cart;