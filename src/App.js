import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Products from  './components/Products';
import Cart from './components/Cart'


function App() {
  const [page, changePage] = useState("home")
  // const [page, changePage] = useState("cart")
  // const [cart, addToCart] = useState([]);
  const [cart, addToCart] = useState([
    
    {item: {id: 2, name: "ball", url: "https://images-na.ssl-images-amazon.com/images/I/81kTc0r6StL._SX425_.jpg"},
    count: 3},
    {item: {id: 3, name: "arrow arrow arrow", url: "https://5.imimg.com/data5/MS/KC/MY-64362/archery-arrow-bow-500x500.jpg"},
    count: 1}
  ]);

  function addItem(updatedCart) {
    console.log("addItem calling addToCart");
    console.log(cart);

    addToCart([...updatedCart]);

  }

  function generateHomePage() {
    console.log("show home");
    
    
        return (
          <>
            <Products newItem={ (updatedCart) => addItem(updatedCart)} cart={cart} />
          </>
        )
    }

    function generateCartPage() {
      console.log("show cart");
  
          return (
            <>
              <Cart cart={cart} newList={ (updatedCart) => addItem(updatedCart)}/>
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
