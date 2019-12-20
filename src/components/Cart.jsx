import React from 'react'
import Product from './Product'

import './Cart.css'

function Cart(props) {
    return (
        <div>
            <div className="main-text">Review Your Products</div>

        <div className="products-section">
            {/* {props.cartItems.map( (el) => <h2>cart item</h2> )} */}
            {props.cartItems.map( (el) => <Product key={el.id} itemInfo={el} newItem={props.newItem}/> )}
        </div>
        </div>
    )
}

export default Cart;