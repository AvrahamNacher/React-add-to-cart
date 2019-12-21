import React from 'react'

import './CartItem.css'

function CartItem(props) {

    function updateCart(amountChange) {

        let location = props.cart.findIndex( (el) => el.item.id === props.itemInfo.item.id);
        props.cart[location].count += amountChange;
        // update the cart with the new count. If the count = 0, then remove it from the cart array
        props.newList(props.cart.filter( (el) => el.count !== 0));
    }

    return (
         <div className="cart-item">
            <img src={props.itemInfo.item.url} alt={props.itemInfo.item.name}/>
            <div className="item-name">{props.itemInfo.item.name}</div>
            <div className="item-count">Quantity: 
                <button onClick={ () => updateCart(1)}>+</button>
                <span className="item-count__span">{props.itemInfo.count}</span>
                <button onClick={ () => updateCart(-1)}>-</button>
                <button className="remove-from-cart" onClick={ () => updateCart(props.itemInfo.count * -1)}>X</button>

            </div>
        </div>

    )
}

export default CartItem;