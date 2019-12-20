import React from 'react'

import './Product.css'


function Product(props) {

    function addItemToCart () {
        console.log(props.itemInfo.name);
        props.newItem(props.itemInfo);
    }


    return (
        <div className="productDiv">
            <h3>{props.itemInfo.name}</h3>
            <img src={props.itemInfo.url} alt={props.itemInfo.name}/>
            <button onClick={ () => addItemToCart()}>Add to Cart</button>
        </div>
    );
}

export default Product;