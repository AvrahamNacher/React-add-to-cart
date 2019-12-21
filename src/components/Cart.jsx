import React from 'react'
import CartItem from './CartItem'

import './Cart.css'

function Cart(props) {
    // console.log("cart = ");
    // console.log(props.cart);
    return (
        <div>
            <div className="main-text">Review Your Products</div>

            <div className="cart-section">
                {(props.cart.length !== 0)
                ? props.cart.map( (el) => <CartItem key={el.item.id} itemInfo={el} newList={props.newList} cart={props.cart}/> )
                : <div className="empty-cart-text">Add some items to your cart.</div>
                }
            </div>
        </div>
    )
}

export default Cart;