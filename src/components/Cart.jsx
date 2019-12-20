import React from 'react'
import Product from './Product'

import './Cart.css'

function Cart(props) {
    console.log("cart = ");
    console.log(props.cartItems);
    return (
        <div>
            <div className="main-text">Review Your Products</div>

        <div className="products-section">
            {props.cartItems.map( (el) => <Product key={el.item.id} itemInfo={el.item} newItem={props.newItem}/> )}
        </div>
        </div>
    )
}

export default Cart;