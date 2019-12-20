import React from 'react'

import './Product.css'
import './ProductButton'
import ProductButton from './ProductButton';


function Product(props) {

    function addItemToCart () {
        console.log(props.itemInfo.name);
        props.newItem(props.itemInfo);
    }


    return (
        <div className="productDiv">
            <div className="itemName">{props.itemInfo.name}</div>
            <img src={props.itemInfo.url} alt={props.itemInfo.name}/>
            {/* <button onClick={ () => addItemToCart()}>Add to Cart</button> */}
            <ProductButton itemInfo={props.itemInfo} cart={props.cart} newItem={props.newItem}>Add To Cart</ProductButton>
        </div>
    );
}

export default Product;