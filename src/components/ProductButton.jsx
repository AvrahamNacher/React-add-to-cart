import React from 'react'

import './ProductButton.css'

function ProductButton(props) {

    function addItemToCart () {
        let cart = props.cart;

        // console.log("ProductButton cart = ");
        // console.log(cart);
        let numItems = cart.length;
        // console.log("Button cartLength  = " + numItems);
        if (numItems > 0) {
        //   console.log("numItems " + numItems + " items")
        //   console.log("found at index " + cart.findIndex ( el => el.item.id === props.itemInfo.id ) );
          let newItemLocation = cart.findIndex ( el => el.item.id === props.itemInfo.id );
    
    
          if (newItemLocation !== -1) {  // item already exists in the array
            cart[newItemLocation].count++;
            // console.log("cart is now");
            // console.log(cart);
    
          } 
          else {  // item id is unique and only found in last position array (
              cart.push({item: props.itemInfo, count: 1})
          }


        } else { // no items yet in cart
            cart.push({item: props.itemInfo, count: 1});
            // console.log("pushed into empty cart and now #items = ");
            // console.log(cart.length);
        }


        // console.log(props.itemInfo.name);
        props.newItem(cart);

    }

    return (
        <div>
            <button className="product-button" onClick={ () => addItemToCart()}>{props.children}</button>
        </div>
    )
}

export default ProductButton;