import React from 'react'

import './Header.css'

function Header(props) {

    function updatePage(page) {
        // console.log("clicked " + page);
        props.page(page)
    }

    function countCartItems() {
        let count = 0;
        for (let item of props.cart) {
            count += item.count;
        }
        // console.log("total items = " + count);
        return count;
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
            <div className="cart-item-count">
                {countCartItems()}
            </div>
        </header>
    )
}

export default Header