import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Products from  './components/Products';
import Cart from './components/Cart'
// import { CatsSection } from './components/Cats-section'

// import Counter from './components/Counter'

function App() {
  const [page, changePage] = useState("home")
  const [cart, addToCart] = useState([]);

  function generateHomePage() {
    console.log("show home");

        return (
          <>
            <Products newItem={ (item) => addToCart([...cart, item])}/>
          </>
        )
    }

    function generateCartPage() {
      console.log("show cart");
  
          return (
            <>
              <Cart cartItems={cart}/>
              {/* <Products newItem={ (item) => addToCart([...cart, item])}/> */}
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
