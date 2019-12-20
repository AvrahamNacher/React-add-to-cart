import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Products from  './components/Products';
import Cart from './components/Cart'


function App() {
  const [page, changePage] = useState("home")
  const [cart, addToCart] = useState([]);

  useEffect( () => {
    console.log(cart);
    let numItems = cart.length-1;
    console.log("cartLength = " + numItems);
    if (numItems > 0) {
      console.log(">=2 items")
      console.log(cart[numItems].item.id);
      console.log("found at index " + cart.findIndex ( el => el.item.id === cart[numItems].item.id ) );
      let newItemLocation = cart.findIndex ( el => el.item.id === cart[numItems].item.id );


      if (newItemLocation !== numItems) {  // item already exists in the array
        cart[newItemLocation].count++;
        console.log("Incrementing Item Count to " + cart[newItemLocation].count);
        cart.pop();
        console.log("cart is now");
        console.log(cart);

      } else {  // item id is unique and only found in last position array (
      }
    }

  },[cart]);

  function addItem(item) {
    console.log(cart);

    addToCart([...cart, {item: item, count: 1}]);

  }

  function generateHomePage() {
    console.log("show home");
    
    
        return (
          <>
            <Products newItem={ (item) => addItem(item)}/>
            {/* <Products newItem={ (item) => addToCart([...cart, {item: item, count: 1} ])}/> */}
          </>
        )
    }

    function generateCartPage() {
      console.log("show cart");
  
          return (
            <>
              <Cart cartItems={cart}/>
            </>
          )
      }

  return (
    <div className="App">
      <Header 
        page={(newPage) => changePage(newPage)} 
        cart={cart}
      />

      {/* Update the view based on which screen should be showing */}
      {(page === "home") 
      ? generateHomePage()
      : (page === "cart")
      ? generateCartPage()
      : console.log("Message from App.js: page display error")
      }



      {/* <CatsSection /> */}
      {/* <Counter>4</Counter> */}
      
    </div>
  );
}

export default App;
