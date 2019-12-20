import React from 'react'
import Product from './Product'
import productList from './product-list.js'

import './Products.css'

function Products(props) {
    
    return (
        <div>
            <div className="main-text">Select Your Products</div>

        <div className="products-section">
            {productList.map( (el) => <Product key={el.id} itemInfo={el} newItem={props.newItem}/> )}
        </div>
        </div>
    );
}

export default Products;