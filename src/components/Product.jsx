import React from 'react'

import './Product.css'
import './ProductButton'
import ProductButton from './ProductButton';


function Product(props) {


    return (
        <div className="productDiv">
            <div className="itemName">{props.itemInfo.name}</div>
            <img src={props.itemInfo.url} alt={props.itemInfo.name}/>
            <ProductButton itemInfo={props.itemInfo} cart={props.cart} newItem={props.newItem}>Add To Cart</ProductButton>
        </div>
    );
}

export default Product;