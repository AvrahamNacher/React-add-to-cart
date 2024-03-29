import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Products from  './components/Products';
import Cart from './components/Cart'


function App() {
  const [page, setPage] = useState("home")
  // const [page, changePage] = useState("cart")  // FOR TESTING
  const [cart, setCart] = useState([]);
  // const [cart, addToCart] = useState([  // FOR TESTING
    
  //   {item: {id: 2, name: "ball", url: "https://images-na.ssl-images-amazon.com/images/I/81kTc0r6StL._SX425_.jpg"},
  //   count: 3},
  //   {item: {id: 3, name: "arrow", url: "https://5.imimg.com/data5/MS/KC/MY-64362/archery-arrow-bow-500x500.jpg"},
  //   count: 1}
  // ]);

  function generateHomePage() {
    // console.log("show home");
        return (
          <>
            <Products newItem={ (updatedCart) => setCart([...updatedCart])} cart={cart} />
          </>
        )
    }

    function generateCartPage() {
      // console.log("show cart");
          return (
            <>
              <Cart cart={cart} newList={ (updatedCart) => setCart([...updatedCart])}/>
            </>
          )
      }

  return (
    <div className="App">
      <Header 
        page={(newPage) => setPage(newPage)} 
        cart={cart}
      />

      {/* Update the view based on which screen should be showing */}
      {(page === "home") 
      ? generateHomePage()
      : (page === "cart")
      ? generateCartPage()
      : console.log("Message from App.js: page display error")
      }
      
    </div>
  );
}

export default App;
