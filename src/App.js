import React, { useState } from 'react';
import './App.css';

import Products from './Products';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Cart from './Cart';
import { Button } from '@material-ui/core';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const getCartTotal = () => {
    return cart.reduce(
      (sum, { quantity }) => sum + quantity,
      0
    );
  };

  return (
    <div className="App">
      <header>
   <Button style={{marginRight:15}}variant="contained"  onClick={() => navigateTo(PAGE_PRODUCTS)}>
          View Menu
        </Button>
   
        <Button startIcon={<AddShoppingCartIcon/>} variant="contained"  onClick={() => navigateTo(PAGE_CART)}>
        ({getCartTotal()}) Checkout
        </Button>

    
      </header>

      {page === PAGE_PRODUCTS && (
        <Products cart={cart} setCart={setCart} />
      )}
      {page === PAGE_CART && (
        <Cart cart={cart} setCart={setCart} />
      )}
      
    </div>
  );
}

export default App;
