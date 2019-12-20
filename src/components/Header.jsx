import React from 'react'

import './Header.css'

function Header(props) {

    function updatePage(page) {
        console.log("clicked " + page);
        props.page(page)
    }
    return (
        <header>
            <div className="storeName">
                Better Goods, Inc.
            </div>
            <nav>
                <button onClick={ () => updatePage("home")} className="header-button">Home</button>
                <button onClick={ () => updatePage("cart")} className="header-button">Cart</button>
            </nav>
            <div className="cartItems">
                {props.cart.length}
            </div>
            {/* {props.cart.map( (item) => <span>{item}</span>)} */}
        </header>
    )
}

export default Header