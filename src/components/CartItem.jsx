import React from 'react'

import './CartItem.css'

function CartItem(props) {

    function updateCart(amt) {

    }

    return (
         <div className="cart-item">
            <img src={props.itemInfo.item.url} alt={props.itemInfo.item.name}/>
            <div className="item-name">{props.itemInfo.item.name}</div>
            <div className="item-count">Quantity: 
                <button onClick={ () => updateCart(1)}>+</button>
                {props.itemInfo.count}
                <button onClick={ () => updateCart(-1)}>-</button>
                <button className="remove-from-cart" onClick={ () => updateCart(-1)}>X</button>

            </div>
            {/* <ProductButton itemInfo={props.itemInfo} cart={props.cart} newItem={props.newItem}>Add To Cart</ProductButton> */}
        </div>

    )
}

export default CartItem;